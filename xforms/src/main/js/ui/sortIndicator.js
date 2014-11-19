//TODO remove

function SortIndicator (jQuery, jSortContainer) {
    this.jQ = jQuery;
    this.jSortContainer = jSortContainer;
}

SortIndicator.prototype.setOn = function () {
    this.getOnRadioJ().prop("checked", true);
    this.getOffRadioJ().prop("checked", false);
};

SortIndicator.prototype.setOff = function () {
    this.getOnRadioJ().prop("checked", false);
    this.getOffRadioJ().prop("checked", true);
};

SortIndicator.prototype.getOnRadioJ = function () {
    return this.jSortContainer.find("input#sortOn");

};

SortIndicator.prototype.getOffRadioJ = function () {
    return this.jSortContainer.find("input#sortOff");
};

SortIndicator.prototype.init = function () {
    var that = this;
    this.jQ("#table").on("sortingChanged", function (event) {
        that.setOn();
    });
    this.getOffRadioJ().click(function () {
        var event = that.jQ.Event("sortingOff");
        that.jSortContainer.trigger(event)
    });
};