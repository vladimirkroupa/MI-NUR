function FilteringCriteria (filteringCriterionList) {
    this.criterionList = filteringCriterionList;
}

FilteringCriteria.prototype.filter = function (items) {
    var filteredItems = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (this.matches(item)) {
            filteredItems.push(item);
        }
    }
    return filteredItems;
};

FilteringCriteria.prototype.matches = function (item) {
    for (var i = this.criterionList.length - 1; i > 0; i--) {
        var criterion = this.criterionList[i];
        if (! criterion.matches(item)) {
            return false;
        }
    }
    return true;
};


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