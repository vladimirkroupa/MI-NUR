function Item (itemDefinition) {
    this.itemDefinition = itemDefinition;
    this.values = {};

    var inValues = Array.prototype.slice.call(arguments, 1);
    itemDefinition.assertItemValuesValid(inValues);

    var attributes = itemDefinition.getAttributesInOrder();
    for (var i = 0; i < inValues.length; i++) {
        var attribute = attributes[i];
        var value = inValues[i];
        this.values[attribute] = value;
    }
}

Item.prototype.getValue = function (attributeName) {
    return this.values[attributeName];
};

Item.prototype.getValuesInOrder = function () {
    var attributes = this.itemDefinition.getAttributesInOrder();
    var valueList = [];
    for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        var value = this.values[attribute];
        valueList.push(value);
    }
    return valueList;
};