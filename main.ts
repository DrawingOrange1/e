basic.forever(function () {
    if (input.lightLevel() >= 128) {
        music.playMelody("- - - - - - - - ", 188)
        basic.showString("Wake Up")
    } else if (input.lightLevel() <= 128) {
        basic.showString("Bed Time")
    }
})
