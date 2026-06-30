from PIL import Image

img = Image.open('public/logo_white.png')
bbox = img.getbbox()
if bbox:
    img_cropped = img.crop(bbox)
    img_cropped.save('public/logo_white.png')
    print("Cropped successfully to:", bbox)
else:
    print("No bounding box found (empty image?)")
