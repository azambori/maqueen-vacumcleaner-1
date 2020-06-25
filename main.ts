input.onButtonPressed(Button.A, function () {
    Run = 0
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("- C5 C G D A - - ", 120)
    Run = 1
})
let Run = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P15, 0)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
strip.show()
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (Run == 1) {
        strip.show()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        basic.showArrow(ArrowNames.South)
        while (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
            basic.showIcon(IconNames.SmallDiamond)
            basic.pause(300)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 45)
            while (maqueen.Ultrasonic(PingUnit.Centimeters) < 30) {
                basic.pause(10)
            }
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        strip.clear()
    }
})
basic.forever(function () {
    basic.pause(100)
    strip.rotate(1)
    strip.show()
})
