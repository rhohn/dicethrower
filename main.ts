let die1 = 0
let die2 = 0
function showThree () {
    basic.clearScreen()
    basic.showLeds(`
        . . . # #
        . . . . #
        . . # . .
        # . . . .
        # # . . .
        `)
}
function chooseDisplayMode () {
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
    showFive()
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
}
function determinePicture (num: number) {
    if (num == 1) {
        showOne()
    } else if (num == 2) {
        showTwo()
    } else if (num == 3) {
        showThree()
    } else if (num == 4) {
        showFour()
    } else if (num == 5) {
        showFive()
    } else {
        showSix()
    }
}
function showTwo () {
    basic.clearScreen()
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        # . . . .
        # # . . .
        `)
}
function showFour () {
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
}
function showSix () {
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        . . . . .
        # # . # #
        . . . . .
        # # . # #
        `)
}
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 6; index++) {
        determinePicture(randint(1, 6))
        basic.pause(10)
    }
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(10)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(10)
    }
    die1 = randint(1, 6)
    die2 = randint(1, 6)
    determinePicture(die1)
    basic.pause(1500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    determinePicture(die2)
    basic.pause(1500)
    basic.clearScreen()
    basic.showString("=")
    basic.showNumber(die1 + die2)
    basic.pause(1500)
    basic.showIcon(IconNames.StickFigure)
})
function showOne () {
    basic.clearScreen()
    basic.showLeds(`
        . . . # .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function showFive () {
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        # . . . #
        . . # . .
        # . . . #
        # # . # #
        `)
}
