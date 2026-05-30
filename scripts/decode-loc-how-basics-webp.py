"""Decode Locations How It Works card webp images from transcript or .b64 file."""
from __future__ import annotations

import argparse
import base64
import pathlib
import re

WORKSPACE = pathlib.Path(__file__).resolve().parents[1]
PATTERN = re.compile(r'data:image/webp;base64,([A-Za-z0-9+/=]+)')

PRESETS: dict[str, tuple[str, ...]] = {
    'basics': (
        'The Basics: What is a personal injury lawsuit?',
        'UklGRgYvAAB',
    ),
    'worth': (
        'How Much is My Personal Injury Case Worth?',
        'UklGRpYdAAB',
    ),
    'difference': (
        'The Morgan & Morgan Difference',
        'UklGRkQZAAB',
    ),
    'ineligible': (
        'Why Do Some Personal Injury Cases Get Turned Down',
        'UklGRq4lAAB',
    ),
}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'preset',
        choices=sorted(PRESETS),
        nargs='?',
        default='basics',
        help='basics | worth | difference | ineligible',
    )
    parser.add_argument('--out', type=pathlib.Path, help='Override output path under public/')
    parser.add_argument('--b64-file', type=pathlib.Path, help='Raw base64 only (no data: prefix)')
    parser.add_argument('--transcript', type=pathlib.Path)
    args = parser.parse_args()

    default_out = {
        'basics': WORKSPACE / 'public' / 'images' / 'locations' / 'loc-how-basics-lawsuit.webp',
        'worth': WORKSPACE / 'public' / 'images' / 'locations' / 'loc-how-case-worth.webp',
        'difference': WORKSPACE / 'public' / 'images' / 'locations' / 'loc-how-morgan-difference.webp',
        'ineligible': WORKSPACE / 'public' / 'images' / 'locations' / 'loc-how-cases-ineligible.webp',
    }[args.preset]
    out_path = args.out or default_out
    markers = PRESETS[args.preset]

    b64: str | None = None

    if args.b64_file:
        b64 = args.b64_file.read_text(encoding='utf-8').strip()

    if not b64:
        transcripts = (
            [args.transcript]
            if args.transcript
            else sorted(
                (
                    pathlib.Path.home()
                    / '.cursor'
                    / 'projects'
                    / 'd-AIH-forthepeople-AIGC'
                    / 'agent-transcripts'
                ).glob('**/*.jsonl'),
                key=lambda p: p.stat().st_mtime,
                reverse=True,
            )
        )
        for transcript in transcripts:
            if not transcript.exists():
                continue
            for line in transcript.read_text(encoding='utf-8').splitlines():
                if not any(m in line for m in markers):
                    continue
                m = PATTERN.search(line)
                if m:
                    b64 = m.group(1)
                    break
            if b64:
                break

    if not b64:
        raise SystemExit(f'No webp base64 payload found for preset {args.preset!r}.')

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(b64))
    print(f'Wrote: {out_path} ({out_path.stat().st_size} bytes)')


if __name__ == '__main__':
    main()
