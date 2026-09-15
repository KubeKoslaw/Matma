// hooks.ts - Wspólne hooki trenerów: stan Duolingo z zapisem oraz odliczanie czasu.

import { useCallback, useEffect, useRef, useState } from "react";
import { loadStats, saveStats } from "./stats";
import type { DuoStats } from "./stats";

/** Stan trenera z natychmiastowym zapisem do localStorage przy każdej zmianie. */
export function useDuoStats(): {
  stats: DuoStats;
  update: (fn: (prev: DuoStats) => DuoStats) => void;
} {
  const [stats, setStats] = useState<DuoStats>(loadStats);
  const update = useCallback((fn: (prev: DuoStats) => DuoStats) => {
    setStats((prev) => {
      const next = fn(prev);
      saveStats(next);
      return next;
    });
  }, []);
  return { stats, update };
}

interface TimerApi {
  timeLeft: number;
  maxTime: number;
  running: boolean;
  /** Uruchamia odliczanie; onExpire odpala się raz po osiągnięciu zera. */
  start: (seconds: number) => void;
  stop: () => void;
}

/** Odliczanie 100 ms krokami (jak w legacy); expired przez ref — bez stale closures. */
export function useTrainerTimer(onExpire: () => void): TimerApi {
  const [timeLeft, setTimeLeft] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timeLeftRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const expireRef = useRef(onExpire);
  expireRef.current = onExpire;

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setRunning(false);
  }, []);

  const start = useCallback(
    (seconds: number) => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      timeLeftRef.current = seconds;
      setTimeLeft(seconds);
      setMaxTime(seconds);
      setRunning(true);
      intervalRef.current = window.setInterval(() => {
        const next = Math.max(0, timeLeftRef.current - 0.1);
        timeLeftRef.current = next;
        setTimeLeft(next);
        if (next <= 0) {
          stop();
          expireRef.current();
        }
      }, 100);
    },
    [stop]
  );

  useEffect(() => stop, [stop]);

  return { timeLeft, maxTime, running, start, stop };
}

/** Odczyt pozostałego czasu w chwili odpowiedzi (do bonusu XP). */
export function timeFraction(timeLeft: number, maxTime: number): number | null {
  if (maxTime <= 0) return null;
  return Math.max(0, timeLeft / maxTime);
}
