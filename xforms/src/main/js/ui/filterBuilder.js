function TextAttributeFilterView (jQuery) {
    this.jQ = jQuery;
}

TextAttributeFilterView.prototype.createFilterView = function (jContainer, changeTypeF, changeValueF) {
    var jSelect = this.jQ(
        '<select>' +
            '<option value="containsText">contains</option>' +
            '<option value="startsWithText">starts with</option>' +
        '</select>');
    jSelect.appendTo(jContainer);
    var jInput = this.jQ('<input type="text" name="value"></input>');
    jInput.appendTo(jContainer);

    var that = this;
    jSelect.change(function () {
        var filterType = jSelect.find("option:selected").attr('value');
        changeTypeF(filterType);
    });

    jInput.change(function () {
        var value = jInput.val();
        changeValueF(value);
    });
};

function TextAttributeFilterBuilder () {
    this.filterType = null;
    this.filterValue = null;
}

TextAttributeFilterBuilder.prototype.buildFilter = function (attribute) {
    var filterConstr = filterFromString(this.filterType);
    return filterConstr(attribute, this.filterValue);
};

TextAttributeFilterBuilder.prototype.filterChanged = function () {
    alert(this.filterValue);
};

TextAttributeFilterBuilder.prototype.setFilterType = function (filterType) {
    this.filterType = filterType;
    this.filterChanged();
};

TextAttributeFilterBuilder.prototype.setFilterValue = function (filterValue) {
    this.filterValue = filterValue;
    this.filterChanged();
};


