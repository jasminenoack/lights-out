var setup = function () {
    $("li").click(handleClick)
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
