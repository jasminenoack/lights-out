var startup = function (sequence) {
    if (!sequence) {
        var sequence = [0, 5, 10, 15, 20, 21, 22, 23, 24, 19, 14, 9, 4, 3, 2, 1, 6, 11, 16, 17, 18, 13, 8, 7, 12]
    }
    if (sequence.length > 0) {
        $(".on").removeClass("on")
        $($("li")[sequence.shift()]).addClass("on")
        setTimeout(startup.bind(this, sequence), 100)
    } else {
        inner = [7, 11, 12, 13, 17]
        $(".on").removeClass("on")
        for(var i = 0; i < inner.length; i++) {
            $($("li")[inner[i]]).addClass("on")
        }
        $($("li")[12]).click(setup)
    }
}

var setup = function () {
    $(".on").removeClass("on")
    $($("li")[12]).off
    // $("li").click(handleClick)
}

function getBlock (index) {
    return $($("li")[index])
}

var handleClick = function (event) {
    var block = $(event.currentTarget)
    var index = block.index()
    var left = index % 5 == 0
    var right = (index + 1) % 5 == 0
    var top = index < 5
    var bottom = index > 19

    block.toggleClass("on")
    if (!top) {
        above = getBlock(index - 5).toggleClass("on")
    }
    if (!bottom) {
        above = getBlock(index + 5).toggleClass("on")
    }
    if (!left) {
        above = getBlock(index - 1).toggleClass("on")
    }
    if (!right) {
        above = getBlock(index + 1).toggleClass("on")
    }

    if (isComplete()) {
        console.log("You win!")
    }
}

function isComplete () {
    if (!$(".on").length) {
        return true
    }
    else {
        return false
    }
}
