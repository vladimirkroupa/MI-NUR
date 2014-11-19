function ContainsTextFilterView (jQuery, jContainer, attribute) {
    this.jQ = jQuery;
    this.filter = new ContainsFilter(jQuery, attribute);
    this.listeners = [];

    var jLabel = this.jQ('<label>contains text:</label>');
    var jInput = this.jQ('<input type="text" name="value"></input>');
    jInput.appendTo(jLabel);
    jLabel.appendTo(jContainer);

    var that = this;
    jInput.change(function () {
        var value = jInput.val();
        that.setFilterValue(value);
        that.notifyListeners();
    });
}

ContainsTextFilterView.prototype.getFilter = function () {
    return this.filter;
};

ContainsTextFilterView.prototype.setFilterValue = function (filterValue) {
    this.filter.setValue(filterValue);
};

ContainsTextFilterView.prototype.registerListener = function (listener) {
    this.listeners.push(listener);
};

ContainsTextFilterView.prototype.notifyListeners = function () {
    for (var i = 0; i < this.listeners.length; i++) {
        var listener = this.listeners[i];
        listener.notify();
    }
};


