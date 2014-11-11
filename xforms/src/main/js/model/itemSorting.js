function NoSort() {
}

NoSort.prototype.sortsAttribute = function (attribute) {
    return false;
};

NoSort.prototype.sort = function (itemList) {
    return itemList;
};


function ComparisonSort (attribute) {
    this.attribute = attribute;
}

ComparisonSort.prototype.sortsAttribute = function (attribute) {
    return this.attribute === attribute;
};

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

AscendingSort.prototype.addSortIndicatorClass = function (jTData) {
    jTData.addClass('asc');
};

AscendingSort.prototype.flip = function () {
    return new DescendingSort(this.attribute);
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

DescendingSort.prototype.addSortIndicatorClass = function (jTData) {
    jTData.addClass('desc');
};

DescendingSort.prototype.flip = function () {
    return new AscendingSort(this.attribute);
};