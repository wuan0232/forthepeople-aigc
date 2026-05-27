"""Decode After an Injury first-card AVIF from transcript or a .b64 file."""
from __future__ import annotations

import argparse
import base64
import json
import pathlib
import re
import sys

OUT_NAME = 'tcp-after-injury-post-checklist.avif'
TRANSCRIPT_MARKER = 'After an Injury'


def extract_b64_from_text(text: str) -> str:
    m = re.search(r'data:image/avif;base64,([A-Za-z0-9+/=]+)', text)
    if not m:
        raise SystemExit('No data:image/avif;base64 payload found in input.')
    return m.group(1)


def b64_from_transcript(transcript: pathlib.Path) -> str:
    for line in transcript.read_text(encoding='utf-8').splitlines():
        if TRANSCRIPT_MARKER not in line or 'data:image/avif;base64,' not in line:
            continue
        payload = json.loads(line)
        text = payload['message']['content'][0]['text']
        return extract_b64_from_text(text)
    raise SystemExit(f'No matching user message in {transcript}')


def write_avif(workspace_root: pathlib.Path, b64: str) -> pathlib.Path:
    out_path = (
        workspace_root
        / 'public'
        / 'images'
        / 'about'
        / 'the-case-process'
        / OUT_NAME
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(b64))
    return out_path


def main() -> None:
    workspace_root = pathlib.Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--b64-file',
        type=pathlib.Path,
        help='Plain base64 file (no data: prefix)',
    )
    parser.add_argument(
        '--transcript',
        type=pathlib.Path,
        help='agent-transcripts *.jsonl with the user message',
    )
    args = parser.parse_args()

    if args.b64_file:
        b64 = args.b64_file.read_text(encoding='utf-8').strip()
    elif args.transcript:
        b64 = b64_from_transcript(args.transcript)
    else:
        default = (
            pathlib.Path.home()
            / '.cursor'
            / 'projects'
            / 'd-AIH-forthepeople-AIGC'
            / 'agent-transcripts'
            / 'eacf6bd6-251c-43ae-acf7-c7fef76260e5'
            / 'eacf6bd6-251c-43ae-acf7-c7fef76260e5.jsonl'
        )
        b64 = b64_from_transcript(default)

    out_path = write_avif(workspace_root, b64)
    print(f'Wrote: {out_path} ({out_path.stat().st_size} bytes, b64 len {len(b64)})')


if __name__ == '__main__':
    main()
