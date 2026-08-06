from PIL import Image
import os

# -----------------------------
# Fichiers
# -----------------------------

SOURCE = "../assets/logo-master.png"
OUTPUT = "../public"

# -----------------------------
# Tailles
# -----------------------------

ICONS = {
    "favicon-16x16.png":16,
    "favicon-32x32.png":32,
    "favicon-48x48.png":48,
    "apple-touch-icon.png":180,
    "favicon-192.png":192,
    "favicon-512.png":512,
    "maskable-icon.png":512,
}

os.makedirs(OUTPUT, exist_ok=True)

img = Image.open(SOURCE).convert("RGBA")

for filename,size in ICONS.items():

    icon = img.resize((size,size),Image.LANCZOS)

    icon.save(
        os.path.join(OUTPUT,filename),
        optimize=True
    )

print("PNG créés.")

# favicon.ico

sizes = [(16,16),(32,32),(48,48)]

img.save(
    os.path.join(OUTPUT,"favicon.ico"),
    format="ICO",
    sizes=sizes
)

print("favicon.ico créé.")

print("Terminé.")