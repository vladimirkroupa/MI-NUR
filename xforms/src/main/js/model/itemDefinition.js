function ItemDefinition (attributes, defaultSort) {
    this.attributes = attributes;
    this.defaultSort = defaultSort;
}

ItemDefinition.prototype.assertItemAttributeValuesValid = function (attributeValues) {
    if (attributeValues.length !== this.getAttributesCount()) {
        var msg = "Item definition specifies "+ this.getAttributesCount() +" attributes , but "+ attributeValues.length +" attribute values were supplied.";
        msg += "\nSupplied attributes:";
        for (var i = 0; i < attributeValues.length; i++) {
            msg += "\n" + attributeValues[i];
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
