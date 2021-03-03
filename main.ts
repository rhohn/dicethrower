function showThree () {
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
    let picList: Image[] = []
    die1 = randint(1, 6)
    die2 = randint(1, 6)
    for (let index = 0; index < 6; index++) {
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
function showTwo () {
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        # . . . .
        # # . . .
        `)
}
function roll (num: number) {
	
}
function showFour () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
}
input.onButtonPressed(Button.B, function () {
    mode = 1
})
function showSix () {
    basic.showLeds(`
        # # . # #
        . . . . .
        # # . # #
        . . . . .
        # # . # #
        `)
}
input.onGesture(Gesture.Shake, function () {
    if (mode == 0) {
        rollNumber()
    } else {
        rollPic()
    }
})
function showOne () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
}
function showFive () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . # . .
        # . . . #
        # # . # #
        `)
}
let mode = 0
let die2 = 0
let die1 = 0
let pic1 = 0
