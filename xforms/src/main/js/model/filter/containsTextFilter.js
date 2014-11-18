function ContainsFilter (jQuery, attribute) {
    Filter.call(this, jQuery, attribute);
}

ContainsFilter.prototype = new Filter ();

ContainsFilter.prototype.setValue = function (value) {
    this.criterion = new ContainsTextCriterion(value);
    this.enable();
};