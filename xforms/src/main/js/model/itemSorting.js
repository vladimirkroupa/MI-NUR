function NoSort() {
}

NoSort.prototype.sort = function (itemList) {
    return itemList;
};


function ComparisonSort (attribute) {
    this.attribute = attribute;
}

ComparisonSort.prototype.sort = function (itemList) {
    var cmp = this.createCompare(this.attribute);
    var sorted = itemList.sort(cmp);
    return sorted;
};

ComparisonSort.prototype.createCompare = function (attribute) {
    var that = this;
    return function (item1, item2) {
        var item1AttrValue = item1.getValue(attribute);
        var item2AttrValue = item2.getValue(attribute);
        return that.compare(item1AttrValue, item2AttrValue);
    };
};


function AscendingSort (attribute) {
    this.attribute = attribute;
}

AscendingSort.prototype = new ComparisonSort();

AscendingSort.prototype.compare = function (val1, val2) {
    if (val1 > val2) {
        return 1;
    }
    if (val1 < val2) {
        return -1;
    }
    return 0;
};


function DescendingSort (attribute) {
    this.attribute = attribute;
}

DescendingSort.prototype = new ComparisonSort();

DescendingSort.prototype.compare = function (val1, val2) {
    if (val1 > val2) {
        return -1;
    }
    if (val1 < val2) {
        return 1;
    }
    return 0;
};