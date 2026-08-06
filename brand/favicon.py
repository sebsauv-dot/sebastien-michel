from PIL import Image

from .utils import load_logo, save_png, PUBLIC_DIR

SIZES = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-48x48.png": 48,
    "apple-touch-icon.png": 180,
    "favicon-192.png": 192,
    "favicon-512.png": 512,
    "maskable-icon.png": 512,
}


def build_favicons():

    logo = load_logo()

    print("Création des favicons...")

    for filename, size in SIZES.items():

        icon = logo.resize((size, size), Image.LANCZOS)

        save_png(icon, filename)

        print("   ✔", filename)

    logo.save(
        PUBLIC_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    print("   ✔ favicon.ico")