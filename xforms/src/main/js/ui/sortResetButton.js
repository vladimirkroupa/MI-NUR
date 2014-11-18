function SortResetButton (jQuery, jButton) {
    this.jQ = jQuery;

    var that = this;
    jButton.click(function () {
        var event = that.jQ.Event("sortReset");
        that.jQ("body").trigger(event);
    });
}