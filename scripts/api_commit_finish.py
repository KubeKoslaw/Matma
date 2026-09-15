#!/usr/bin/env python3
# api_commit_finish.py - Etap 3: składa payload-y tree + commit + ref update
# z SHA-ów zebranych przez warstwę bash (shas.txt: linie "path<TAB>blo sha").
import base64
import json
import os
import pathlib
import subprocess
import sys

OUT = pathlib.Path(sys.argv[1])
message = os.environ["COMMIT_MSG"]

shas = {}
for line in (OUT / "shas.txt").read_text(encoding="utf-8").splitlines():
    if "\t" in line:
        path, sha = line.split("\t", 1)
        shas[path] = sha

manifest = json.loads((OUT / "manifest.json").read_text(encoding="utf-8"))
parent = (OUT / "parent.txt").read_text(encoding="utf-8").strip()
base_tree = (OUT / "base_tree.txt").read_text(encoding="utf-8").strip()

tree_items = []
for step in manifest["steps"]:
    if step["op"] == "delete":
        tree_items.append({"path": step["path"], "mode": "100644", "type": "blob", "sha": None})
    else:
        tree_items.append({"path": step["path"], "mode": "100644", "type": "blob", "sha": shas[step["path"]]})

(OUT / "tree.json").write_text(json.dumps({"base_tree": base_tree, "tree": tree_items}), encoding="utf-8")
(OUT / "commit.json").write_text(json.dumps({"message": message, "tree": "<TREE_SHA>", "parents": [parent]}), encoding="utf-8")
(OUT / "ref.json").write_text(json.dumps({"sha": "<COMMIT_SHA>", "force": False}), encoding="utf-8")
print("payload-y gotowe")
