maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(500)
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
let range = strip.range(0, 4)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    basic.showArrow(ArrowNames.South)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
        basic.showIcon(IconNames.SmallDiamond)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 10)
        while (maqueen.Ultrasonic(PingUnit.Centimeters) < 30) {
            basic.pause(10)
        }
    }
})
basic.forever(function () {
    basic.pause(1000)
    strip.rotate(1)
})
