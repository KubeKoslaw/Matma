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

rm -rf "$OUT"
mkdir -p "$OUT"

python3 scripts/api_commit_prepare.py "$OUT"

PARENT=$(curl -sf -H "$AUTH" "$API/git/ref/heads/$BRANCH" | python3 -c 'import json,sys;print(json.load(sys.stdin)["object"]["sha"])')
echo "$PARENT" > "$OUT/parent.txt"
BASE_TREE=$(curl -sf -H "$AUTH" "$API/git/commits/$PARENT" | python3 -c 'import json,sys;print(json.load(sys.stdin)["tree"]["sha"])')
echo "$BASE_TREE" > "$OUT/base_tree.txt"

: > "$OUT/shas.txt"
while IFS=$'\t' read -r body path; do
  for attempt in 1 2 3; do
    if curl -sS --fail-with-body -H "$AUTH" -d @"$OUT/$body" "$API/git/blobs" > "$OUT/blob_out.json" 2> "$OUT/blob_err.txt"; then
      SHA=$(python3 -c "$SHA_PY" < "$OUT/blob_out.json")
      break
    fi
    echo "retry $attempt dla $path:"; cat "$OUT/blob_err.txt"; sleep 3
  done
  printf '%s\t%s\n' "$path" "$SHA" >> "$OUT/shas.txt"
done < "$OUT/steps.txt"

COMMIT_MSG="${COMMIT_MSG:?brak COMMIT_MSG}" python3 scripts/api_commit_finish.py "$OUT"

TREE_SHA=$(curl -sf -H "$AUTH" -d @"$OUT/tree.json" "$API/git/trees" | python3 -c "$SHA_PY")
sed -i "s|<TREE_SHA>|$TREE_SHA|" "$OUT/commit.json"
COMMIT_SHA=$(curl -sf -H "$AUTH" -d @"$OUT/commit.json" "$API/git/commits" | python3 -c "$SHA_PY")
sed -i "s|<COMMIT_SHA>|$COMMIT_SHA|" "$OUT/ref.json"
curl -sf -X PATCH -H "$AUTH" -d @"$OUT/ref.json" "$API/git/refs/heads/$BRANCH" > /dev/null

echo "OK: $BRANCH -> $COMMIT_SHA"
