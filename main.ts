led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P7, 0)
    basic.pause(1000)
})
