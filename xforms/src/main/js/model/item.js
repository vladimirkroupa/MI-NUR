function Item (itemDefinition) {
    this.itemDefinition = itemDefinition;
    this.values = {};

    var inValues = Array.prototype.slice.call(arguments, 1);
    itemDefinition.assertItemAttributeValuesValid(inValues);

    var attributes = itemDefinition.getAttributesInOrder();
    for (var i = 0; i < inValues.length; i++) {
        var attributeName = attributes[i].getName();
        var value = inValues[i];
        this.values[attributeName] = value;
    }
}

Item.prototype.getValue = function (attribute) {
    return this.values[attribute.getName()];
};

Item.prototype.getValuesInOrder = function () {
    var attributes = this.itemDefinition.getAttributesInOrder();
    var valueList = [];
    for (var i = 0; i < attributes.length; i++) {
        var attributeName = attributes[i].getName();
        var value = this.values[attributeName];
        valueList.push(value);
    }
    return valueList;
};