/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Oct 2023
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(100)

// variable
let numberOfCookiesClicked: number

input.onButtonPressed(Button.A, function () {
  numberOfCookiesClicked = numberOfCookiesClicked + 1
  basic.showNumber(numberOfCookiesClicked)
})

input.onButtonPressed(Button.B, function () {
  numberOfCookiesClicked = 0
  basic.showNumber(numberOfCookiesClicked)
})
