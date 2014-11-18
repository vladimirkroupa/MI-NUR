function AbstractAttribute(name) {
    this.name = name;
}

AbstractAttribute.prototype.getName = function () {
    return this.name;
};

AbstractAttribute.prototype.filterCriterias = function () {
    return [];
};


function TextAttribute (name) {
    this.name = name;
}

TextAttribute.prototype = new AbstractAttribute();

TextAttribute.prototype.compare = function (textAttr1, textAttr2) {
    if (textAttr1 > textAttr2) {
        return 1;
    }
    if (textAttr1 < textAttr2) {
        return -1;
    }
    return 0;
};

TextAttribute.prototype.filterCriterias = function () {
    return [FilterEnum.containsText, FilterEnum.oneOf];
};


function IntegerAttribute (name) {
    this.name = name;
}

IntegerAttribute.prototype = new AbstractAttribute();

IntegerAttribute.prototype.compare = function (attr1, attr2) {
    var integerAttr1 = parseInt(attr1);
    var integerAttr2 = parseInt(attr2);

    if (integerAttr1 > integerAttr2) {
        return 1;
    }
    if (integerAttr1 < integerAttr2) {
        return -1;
    }
    return 0;
};

IntegerAttribute.prototype.filterCriterias = function () {
    return [FilterEnum.oneOf];
};