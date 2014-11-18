function OneOfCriterion (acceptedValues) {
    this.valueMap = {};
    for (var i = 0; i < acceptedValues.length; i++) {
        var value = acceptedValues[i];
        this.valueMap[value] = true;
    }
}

OneOfCriterion.prototype.matches = function (attributeValue) {
    return this.valueMap.contains(attributeValue);
};


function ContainsTextCriterion (textToContain) {
    this.textToContain = textToContain;
}

ContainsTextCriterion.prototype.matches = function (attributeValue) {
    var ttcLower = this.textToContain.toLowerCase();
    return attributeValue.toLowerCase().indexOf(ttcLower) > -1;
};


function RangeCriterion ( lowerEndpoint, upperEndpoint) {
    this.loEnd = lowerEndpoint;
    this.upEnd = upperEndpoint;
}

RangeCriterion.prototype.matches = function (item) {
    var attrValue = item.getValue(this.attribute);
    var intValue = parseInt(attrValue);
    // TODO
};

