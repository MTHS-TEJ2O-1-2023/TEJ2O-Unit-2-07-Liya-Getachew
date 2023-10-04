"""
Created by: Liya Getachew
Created on: Oct 2023
This module is a Micro:bit MicroPython program that adds a point everytime button a is clicked.
"""

from microbit import *

display.clear()
display.show(Image.HEART)

# variable
number_of_cookies_clicked = 0

while True:
    if button_a.is_pressed():
        number_of_cookies_clicked = number_of_cookies_clicked + 1
        display.scroll(str(number_of_cookies_clicked))
    if button_b.is_pressed():
        number_of_cookies_clicked = 0
        display.scroll(str(number_of_cookies_clicked))
