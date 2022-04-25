# importing image object from PIL
from PIL import Image
import sys
  
# creating an image object
im = Image.open("./kitten.jpg")
im1 = im.tobytes("xbm", "rgb")

sys.stdout.buffer.write(im1)
