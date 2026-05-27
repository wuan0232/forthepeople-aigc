import base64
import pathlib
import re


def main() -> None:
    workspace_root = pathlib.Path(__file__).resolve().parents[1]
    src_file = (
        workspace_root
        / 'app'
        / 'components'
        / 'about'
        / 'the-case-process'
        / 'CaseProcessHero.vue'
    )

    text = src_file.read_text(encoding='utf-8')

    # CaseProcessHero.vue 中的 data uri：const tcpRightIllustrationDataUri = 'data:image/avif;base64,...'
    m = re.search(r"tcpRightIllustrationDataUri\s*=\s*'data:image/avif;base64,([^']+)'", text)
    if not m:
        raise SystemExit('Could not extract tcpRightIllustrationDataUri base64 string.')

    b64 = m.group(1).strip()
    out_path = (
        workspace_root
        / 'public'
        / 'images'
        / 'about'
        / 'the-case-process'
        / 'the-case-process-right-illustration.avif'
    )
    out_path.parent.mkdir(parents=True, exist_ok=True)

    out_path.write_bytes(base64.b64decode(b64))
    print(f'Wrote: {out_path} ({out_path.stat().st_size} bytes)')


if __name__ == '__main__':
    main()

