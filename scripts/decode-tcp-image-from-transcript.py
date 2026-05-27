"""Decode a data-URI image from an agent-transcripts jsonl line."""
from __future__ import annotations

import argparse
import base64
import json
import pathlib
import re


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--marker', required=True)
    parser.add_argument('--out', required=True, help='Filename under public/images/about/the-case-process/')
    parser.add_argument('--mime', default='png', help='png, avif, webp, etc.')
    parser.add_argument('--transcript', type=pathlib.Path)
    args = parser.parse_args()

    workspace_root = pathlib.Path(__file__).resolve().parents[1]
    pattern = re.compile(
        rf'data:image/{re.escape(args.mime)};base64,([A-Za-z0-9+/=]+)'
    )

    transcripts = (
        [args.transcript]
        if args.transcript
        else sorted(
            (pathlib.Path.home() / '.cursor' / 'projects' / 'd-AIH-forthepeople-AIGC' / 'agent-transcripts').glob(
                '**/*.jsonl'
            ),
            key=lambda p: p.stat().st_mtime,
            reverse=True,
        )
    )

    b64 = None
    for transcript in transcripts:
        if not transcript or not transcript.exists():
            continue
        for line in transcript.read_text(encoding='utf-8').splitlines():
            if args.marker not in line:
                continue
            m = pattern.search(line)
            if m:
                b64 = m.group(1)
                break
        if b64:
            break

    if not b64:
        raise SystemExit(f'No {args.mime} payload found for marker {args.marker!r}')

    out_path = (
        workspace_root / 'public' / 'images' / 'about' / 'the-case-process' / args.out
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(b64))
    print(f'Wrote: {out_path} ({out_path.stat().st_size} bytes)')


if __name__ == '__main__':
    main()
