function start_game () {
    while (fei_x != sui_x && fei_y != y) {
        led.plot(fei_x, fei_y)
        basic.pause(200)
        sui_x = randint(0, 4)
        for (let index = 0; index < 5; index++) {
            led.plot(sui_x, y)
            basic.pause(200)
            led.unplot(sui_x, y)
            y += 1
            if (input.buttonIsPressed(Button.A)) {
                if (fei_x != 0) {
                    led.unplot(fei_x, fei_y)
                    fei_x += -1
                    led.plot(fei_x, fei_y)
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                if (fei_x != 4) {
                    led.unplot(fei_x, fei_y)
                    fei_x += 1
                    led.plot(fei_x, fei_y)
                }
            }
        }
        y = 0
    }
    stop_game()
}
function stop_game () {
    basic.showString("Gameover!")
}
let sui_x = 0
let y = 0
let fei_y = 0
let fei_x = 0
fei_x = 2
fei_y = 4
y = 0
basic.pause(500)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        start_game()
    }
})
