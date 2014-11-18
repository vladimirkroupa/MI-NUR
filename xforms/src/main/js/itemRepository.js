function ItemRepository (items) {
    this.itemDefinition = items[0].itemDefinition;
    this.items = items;
}

ItemRepository.prototype.getItemDefinition = function() {
    return this.itemDefinition;
};

ItemRepository.prototype.listAllItems = function (sortOption, filteringCriteria) {
    var filtered = this.filter(filteringCriteria, this.items);
    var sorted = sortOption.sort(filtered);
    return sorted;
};


ItemRepository.prototype.filter = function (filteringCriteria, items) {
    var filteredItems = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (this.matches(filteringCriteria, item)) {
            filteredItems.push(item);
        }
    }
    return filteredItems;
};

ItemRepository.prototype.matches = function (filteringCriteria, item) {
    for (var i = filteringCriteria.length - 1; i > 0; i--) {
        var criterion = filteringCriteria[i];
        if (! criterion.matches(item)) {
            return false;
        }
    }
    return true;
};

