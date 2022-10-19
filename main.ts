input.onButtonPressed(Button.A, function () {
    xvalue = 0
    while (xvalue <= 4) {
        led.plot(xvalue, 0)
        basic.pause(100)
        basic.clearScreen()
        xvalue += 1
        led.plot(xvalue, 0)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    yvalue = 0
    while (yvalue <= 4) {
        led.plot(0, yvalue)
        basic.pause(100)
        basic.clearScreen()
        yvalue += 1
        led.plot(0, yvalue)
        basic.pause(100)
        basic.clearScreen()
    }
})
let bvalue = 0
let yvalue = 0
let xvalue = 0
let avalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(avalue, bvalue)
        basic.pause(1000)
        avalue += 1
    }
    if (avalue == 5) {
        avalue = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        led.plot(avalue, 0)
        basic.pause(1000)
        avalue += 1
    }
    while (avalue == 5) {
        avalue = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(avalue, bvalue)
        basic.pause(1000)
        bvalue += 1
    }
    if (bvalue == 5) {
        bvalue = 0
    }
})
