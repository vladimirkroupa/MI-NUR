function ItemDefinition (attributes, defaultSort) {
    this.attributes = attributes;
    this.defaultSort = defaultSort;
}

ItemDefinition.prototype.assertItemValuesValid = function (values) {
    if (values.length !== this.getAttributesCount()) {
        var msg = "Item definition specifies "+ this.getAttributesCount() +" arguments , but "+ values.length +" argument values were supplied.";
        msg += "\nSupplied arguments:";
        for (var i = 0; i < values.length; i++) {
            msg += "\n" + values[i]
        }
        throw msg;
    }
};

ItemDefinition.prototype.getAttributesInOrder = function () {
    return this.attributes;
};

ItemDefinition.prototype.getAttributesCount = function () {
    return this.attributes.length;
};
