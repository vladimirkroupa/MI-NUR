function filterFromString (filterType) {
    switch (filterType) {
        case 'containsText':
            return ContainsTextCriterion;
        case 'startWithText':
            return ContainsTextCriterion;
    }
}


function OneOfCriterion (attribute, acceptedValues) {
    this.attribute = attribute;
    this.valueMap = {};
    for (var i = 0; i < acceptedValues.length; i++) {
        var value = acceptedValues[i];
        this.valueMap[value] = true;
    }
}

OneOfCriterion.prototype.matches = function (item) {
    var attrValue = item.getValue(this.attribute);
    return this.valueMap.contains(attrValue);
};


function ContainsTextCriterion (attribute, textToContain) {
    this.attribute = attribute;
    this.textToContain = textToContain;
}

ContainsTextCriterion.prototype.matches = function (item) {
    var attrValue = item.getValue(this.attribute);
    var ttcLower = this.textToContain.toLowerCase();
    return attrValue.toLowerCase().indexOf(ttcLower) > -1;
};


function RangeCriterion (attribute, lowerEndpoint, upperEndpoint) {
    this.attribute = attribute;
    this.loEnd = lowerEndpoint;
    this.upEnd = upperEndpoint;
}

OneOfCriterion.prototype.matches = function (item) {
    var attrValue = item.getValue(this.attribute);
    var intValue = parseInt(attrValue);
    // TODO
};

