let 일과_1 = 1
let 일과_1_시간 = 600
let 일과_2 = 2
let 일과_2_시간 = 100
let 일과_3 = 3
let 일과_3_시간 = 200
basic.forever(function () {
    basic.showNumber(일과_1)
    basic.pause(일과_1_시간)
    basic.showNumber(일과_2)
    basic.pause(일과_2_시간)
    basic.showNumber(일과_3)
    basic.pause(일과_3_시간)
})
