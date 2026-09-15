#!/usr/bin/env python3
# api_commit_prepare.py - Etap 1: przygotowuje payload-y JSON dla GitHub Git Data API.
# Zero sieci, zero subprocess: czyta indeks gita (git diff --cached), zapisuje
# do KATALOGU wyjściowego:
#   manifest.json         — lista kroków dla warstwy bash (curl)
#   blob_XXX.json         — body POST /git/blobs (base64, bezpieczne w JSON)
#   tree_parent.txt       — sha commita-rodzica
#   tree_base.txt         — sha drzewa rodzica
import base64
import json
import os
import pathlib
import subprocess
import sys

OUT = pathlib.Path(sys.argv[1]).resolve()
if not OUT.is_dir():
    raise SystemExit("katalog wyjściowy musi istnieć")

status = subprocess.check_output(
    ["git", "diff", "--cached", "--name-status", "--no-renames", "-z"], text=True)
parts = status.split("\0")
changes = []
i = 0
while i < len(parts) - 1:
    code, path = parts[i], parts[i + 1]
    i += 2
    if path:
        changes.append((code[0], path))

if not changes:
    raise SystemExit("Brak zmian w indeksie.")

steps = []
for n, (code, path) in enumerate(changes):
    if code == "D":
        steps.append({"op": "delete", "path": path})
        continue
    body_path = OUT / ("blob_%03d.json" % n)
    with open(path, "rb") as f:
        content = f.read()
    body = {"content": base64.b64encode(content).decode(), "encoding": "base64"}
    body_path.write_text(json.dumps(body), encoding="utf-8")
    steps.append({"op": "create", "path": path, "body": body_path.name})

ref_read = OUT / "ref_read.json"
ref_read.write_text(json.dumps({"url": "refs/read"}), encoding="utf-8")

manifest = {
    "ref_read": "ref_read.json",
    "steps": steps,
}
(OUT / "manifest.json").write_text(json.dumps(manifest, indent=1), encoding="utf-8")
# Płaska lista dla pętli bash: body_file<TAB>path
with (OUT / "steps.txt").open("w", encoding="utf-8") as f:
    for s in steps:
        if s["op"] == "create":
            f.write(s["body"] + "\t" + s["path"] + "\n")
print("kroki:", len(steps), "->", OUT)
