from pathlib import Path
from PIL import Image

# Racine du projet
ROOT = Path(__file__).resolve().parent.parent

# Dossiers
ASSET_DIR = ROOT / "assets"
PUBLIC_DIR = ROOT / "public"

# Logo maître
LOGO = ASSET_DIR / "logo-master.png"


def ensure_public():
    """Crée le dossier public s'il n'existe pas."""
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)


def load_logo():
    """Charge le logo maître."""
    if not LOGO.exists():
        raise FileNotFoundError(f"Logo introuvable : {LOGO}")

    return Image.open(LOGO).convert("RGBA")


def save_png(image, filename):
    """Sauvegarde un PNG optimisé."""
    image.save(
        PUBLIC_DIR / filename,
        format="PNG",
        optimize=True,
    )