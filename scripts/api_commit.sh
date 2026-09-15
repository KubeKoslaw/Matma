#!/usr/bin/env bash
# api_commit.sh - Commit zawartości INDEKSU gita przez GitHub Git Data API.
# Użycie: GH_TOKEN=... COMMIT_MSG="..." scripts/api_commit.sh <branch>
# Token pochodzi wyłącznie ze środowiska. Wszystkie URL-e są literalne.
set -euo pipefail

BRANCH="${1:?podaj branch}"
API="https://api.github.com/repos/KubeKoslaw/Matma"
AUTH="Authorization: Bearer ${GH_TOKEN:?brak GH_TOKEN}"
OUT="/tmp/apic"
SHA_PY='import json,sys;print(json.load(sys.stdin)["sha"])'

# api_fetch <metoda> <url> [plik_z_body] — z retry na chwilowe błędy sieci
api_fetch() {
  local method="$1" url="$2" body="${3:-}" out="$OUT/last_response.json" attempt
  for attempt in 1 2 3 4 5; do
    if [ -n "$body" ]; then
      if curl -sS --fail-with-body -X "$method" -H "$AUTH" -d @"$body" "$url" > "$out" 2> "$OUT/err.txt"; then
        return 0
      fi
    else
      if curl -sS --fail-with-body -X "$method" -H "$AUTH" "$url" > "$out" 2> "$OUT/err.txt"; then
        return 0
      fi
    fi
    echo "  (próba $attempt nieudana: $(head -c 120 "$OUT/err.txt"))" >&2
    sleep $((attempt * 3))
  done
  echo "BŁĄD: $method $url po 5 próbach" >&2
  return 1
}

rm -rf "$OUT"
mkdir -p "$OUT"

python3 scripts/api_commit_prepare.py "$OUT"

api_fetch GET "$API/git/ref/heads/$BRANCH"
PARENT=$(python3 -c 'import json,sys;print(json.load(sys.stdin)["object"]["sha"])' < "$OUT/last_response.json")
echo "$PARENT" > "$OUT/parent.txt"
api_fetch GET "$API/git/commits/$PARENT"
BASE_TREE=$(python3 -c 'import json,sys;print(json.load(sys.stdin)["tree"]["sha"])' < "$OUT/last_response.json")
echo "$BASE_TREE" > "$OUT/base_tree.txt"

: > "$OUT/shas.txt"
while IFS=$'\t' read -r body path; do
  api_fetch POST "$API/git/blobs" "$OUT/$body"
  SHA=$(python3 -c "$SHA_PY" < "$OUT/last_response.json")
  printf '%s\t%s\n' "$path" "$SHA" >> "$OUT/shas.txt"
done < "$OUT/steps.txt"

COMMIT_MSG="${COMMIT_MSG:?brak COMMIT_MSG}" python3 scripts/api_commit_finish.py "$OUT"

api_fetch POST "$API/git/trees" "$OUT/tree.json"
TREE_SHA=$(python3 -c "$SHA_PY" < "$OUT/last_response.json")
sed -i "s|<TREE_SHA>|$TREE_SHA|" "$OUT/commit.json"
api_fetch POST "$API/git/commits" "$OUT/commit.json"
COMMIT_SHA=$(python3 -c "$SHA_PY" < "$OUT/last_response.json")
sed -i "s|<COMMIT_SHA>|$COMMIT_SHA|" "$OUT/ref.json"
api_fetch PATCH "$API/git/refs/heads/$BRANCH" "$OUT/ref.json"

echo "OK: $BRANCH -> $COMMIT_SHA"
