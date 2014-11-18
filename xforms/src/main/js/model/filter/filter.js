function Filter (jQuery, attribute) {
    this.jQ = jQuery;
    this.attribute = attribute;
    this.criterion = null;
    this.enabled = false;
}

Filter.prototype.matches = function (item) {
    if (! this.enabled) {
        return true;
    }
    var attrValue = item.getValue(this.attribute);
    return this.criterion.matches(attrValue);
};

Filter.prototype.enable = function () {
    this.enabled = true;
};

Filter.prototype.disable = function () {
    this.enabled = false;
};