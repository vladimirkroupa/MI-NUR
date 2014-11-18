function OneOfFilter (jQuery, attribute) {
    Filter.call(this, jQuery, attribute);
}

OneOfFilter.prototype.setValue = function (values) {
    this.criterion = new OneOfCriterion(values);
};

OneOfFilter.prototype = new Filter ();