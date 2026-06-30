from PIL import Image
import sys

img = Image.open('public/LOGO_RIVOLI.png')
print(img.mode, img.size)
# Sample pixels from corners and middle
print("Top Left:", img.getpixel((0, 0)))
print("Middle:", img.getpixel((img.width//2, img.height//2)))

# Check if there is a lot of black/white
colors = img.getcolors(img.width * img.height)
if colors:
    colors.sort(key=lambda x: x[0], reverse=True)
    for count, color in colors[:5]:
        print(f"{count} pixels of color {color}")
