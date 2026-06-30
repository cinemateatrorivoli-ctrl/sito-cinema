from PIL import Image

img = Image.open('public/LOGO_RIVOLI.png')
img = img.convert("RGBA")
data = img.getdata()

new_data = []
for item in data:
    r, g, b, a = item
    if a > 10: # Only process visible pixels
        # If the pixel is relatively dark and not distinctly red
        # Red in the logo is around (171, 51, 49)
        # Dark gray is around (26, 25, 25)
        # Let's check if it's a "gray" or "black" pixel by seeing if R, G, B are similar and low.
        # Actually, simpler: if it's NOT red. Red has r significantly higher than g and b.
        if r > g + 50 and r > b + 50:
            # It's red-ish, leave it alone
            new_data.append(item)
        else:
            # It's not red, so it's the dark text (or anti-aliasing). Invert it!
            new_r = 255 - r
            new_g = 255 - g
            new_b = 255 - b
            new_data.append((new_r, new_g, new_b, a))
    else:
        new_data.append((0, 0, 0, 0))

img.putdata(new_data)
img.save('public/logo_white.png')
