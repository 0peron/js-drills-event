function bulbOnClick() {
    $('.lightbulb').click(function (event) {
        ('.lightbulb').removeclass('bulb-on');
    })
    $(event.currentTarget).click(function (event) {
        ('.lightbulb').addclass('bulb-on');
    })
}

$(function () {
    bulbOnClick();
});
