import sys
from pathlib import Path

# Ajoute la racine du projet au PYTHONPATH
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from brand.utils import ensure_public
from brand.favicon import build_favicons


def main():
    print("=" * 50)
    print(" BRAND BUILDER 1.0")
    print("=" * 50)

    ensure_public()
    build_favicons()

    print()
    print("✅ Pack favicon terminé.")


if __name__ == "__main__":
    main()