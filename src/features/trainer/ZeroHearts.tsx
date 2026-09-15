// ZeroHearts.tsx - Ekran „skończyły się serduszka" z eliksirem (wspólny dla trenerów).
export default function ZeroHearts({ onRefill, note }: { onRefill: () => void; note?: string }) {
  return (
    <div className="zero-hearts-box">
      <div className="zero-hearts-chibi-wrap">
        <img src="assets/emotes/crying_stream.png" className="zero-hearts-chibi" alt="Płaczący chibi" />
      </div>
      <span className="broken-heart-huge">💔</span>
      <h3>Skończyły Ci się serduszka!</h3>
      <p>
        {note ?? "Twoja postać płacze z powodu błędów, ale eliksir z kociołka natychmiast przywróci pełne siły!"}
      </p>
      <button className="action-btn refill-hearts-btn" onClick={onRefill}>
        <img src="assets/emotes/potion.png" className="btn-chibi-icon" alt="Eliksir" /> Odnów 5 serduszek (Eliksir energii)
      </button>
    </div>
  );
}
