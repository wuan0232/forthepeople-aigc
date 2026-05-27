"""Decode After an Injury card AVIF from transcript line or a .b64 file."""
from __future__ import annotations

import argparse
import base64
import json
import pathlib
import re


def extract_b64_from_text(text: str) -> str:
    m = re.search(r'data:image/avif;base64,([A-Za-z0-9+/=]+)', text)
    if not m:
        raise SystemExit('No data:image/avif;base64 payload found in input.')
    return m.group(1)


def b64_from_transcript(transcript: pathlib.Path, marker: str) -> str:
    for line in transcript.read_text(encoding='utf-8').splitlines():
        if marker not in line or 'data:image/avif;base64,' not in line:
            continue
        payload = json.loads(line)
        text = payload['message']['content'][0]['text']
        return extract_b64_from_text(text)
    raise SystemExit(f'No line matching marker {marker!r} in {transcript}')


def main() -> None:
    workspace_root = pathlib.Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser()
    parser.add_argument('--marker', required=True, help='Unique text in the user message')
    parser.add_argument('--out', required=True, help='Output filename under public/.../the-case-process/')
    parser.add_argument('--b64-file', type=pathlib.Path)
    parser.add_argument('--transcript', type=pathlib.Path)
    args = parser.parse_args()

    if args.b64_file:
        b64 = args.b64_file.read_text(encoding='utf-8').strip()
    elif args.transcript:
        b64 = b64_from_transcript(args.transcript, args.marker)
    else:
        default = (
            pathlib.Path.home()
            / '.cursor'
            / 'projects'
            / 'd-AIH-forthepeople-AIGC'
            / 'agent-transcripts'
        )
        matches = sorted(default.glob('**/*.jsonl'), key=lambda p: p.stat().st_mtime, reverse=True)
        for transcript in matches:
            try:
                b64 = b64_from_transcript(transcript, args.marker)
                break
            except SystemExit:
                continue
        else:
            raise SystemExit(f'No transcript line found for marker {args.marker!r}')

    out_path = (
        workspace_root
        / 'public'
        / 'images'
        / 'about'
        / 'the-case-process'
        / args.out
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(b64))
    print(f'Wrote: {out_path} ({out_path.stat().st_size} bytes, b64 len {len(b64)})')


if __name__ == '__main__':
    main()
