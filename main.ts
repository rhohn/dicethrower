function rollNumber () {
    die1 = randint(1, 6)
    die2 = randint(1, 6)
    for (let index = 0; index < 6; index++) {
        basic.showNumber(randint(1, 6))
        basic.pause(50)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showNumber(die1)
    basic.pause(1500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showNumber(die2)
    basic.pause(1500)
    basic.showIcon(IconNames.Heart)
}
function rollPic () {
    die1 = randint(1, 6)
    die2 = randint(1, 6)
    for (let index = 0; index < 6; index++) {
        picList[randint(0, 5)].showImage(0)
        basic.pause(50)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    picList[die1].showImage(0)
    basic.pause(1500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    picList[die2].showImage(0)
    basic.pause(1500)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    mode = 0
})
input.onButtonPressed(Button.B, function () {
    mode = 1
})
input.onGesture(Gesture.Shake, function () {
    if (mode == 0) {
        rollNumber()
    } else {
        rollPic()
    }
})
let mode = 0
let die2 = 0
let die1 = 0
let picList: Image[] = []
let pic1 = images.createImage(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
let pic2 = images.createImage(`
    . . . # #
    . . . . #
    . . . . .
    # . . . .
    # # . . .
    `)
let pic3 = images.createImage(`
    . . . # #
    . . . . #
    . . # . .
    # . . . .
    # # . . .
    `)
let pic4 = images.createImage(`
    # # . # #
    # . . . #
    . . . . .
    # . . . #
    # # . # #
    `)
let pic5 = images.createImage(`
    # # . # #
    # . . . #
    . . # . .
    # . . . #
    # # . # #
    `)
let pic6 = images.createImage(`
    # # . # #
    . . . . .
    # # . # #
    . . . . .
    # # . # #
    `)
picList = [pic1, pic2, pic3, pic4, pic5, pic6]
basic.showString("#")
for (let index = 0; index < 5; index++) {
    basic.clearScreen()
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
}
basic.clearScreen()
pic5.showImage(0)
for (let index = 0; index < 5; index++) {
    basic.clearScreen()
    basic.pause(50)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
}
