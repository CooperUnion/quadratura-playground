#!/usr/bin/env python3
import sys
import io
import fileinput
import ST7789 as ST7789
from time import sleep
from PIL import Image

# Create ST7789 LCD display class, but only for the target display.
disp = ST7789.ST7789(
    height=240,
    width=320,
    rotation=180,
    port=0,
    cs=1,
    dc=9,
    backlight=13,
    spi_speed_hz=60 * 1000 * 1000,
    offset_left=0,
    offset_top=0
)

WIDTH = disp.width
HEIGHT = disp.height

# Initialize display.
disp.begin()

# Load an image.
while True:
    buffer = sys.stdin.buffer.read()
    print(buffer)
    print("ok")
    #for line in sys.stdin.buffer:
    #    img = Image.open(io.BytesIO(line)) 
    #image = Image.frombuffer("RGB", (320,240), line, 'raw' "L", 0, 1)
    #img = Image.open(io.BytesIO(buffer))
    #image = Image.frombuffer("RGB", (320,240), buffer, 'raw', "L", 0, 1)

"""
while True:
    f = fileinput.input()
    for line in fileinput.input():
        image = Image.frombuffer("L", (4,4), line, 'raw', "L", 0, 1)
        #image = Image.open(io.BytesIO(line))
        #disp.display(image)
        # sleep(1/30)
"""
