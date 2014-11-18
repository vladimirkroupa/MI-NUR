function SortResetButton (jQuery) {
    this.jQ = jQuery;

    var jButton = jQuery("button#sortReset");
    var that = this;
    jButton.click(function () {
        var event = that.jQ.Event("sortReset");
        that.jQ("body").trigger(event);
    });
}