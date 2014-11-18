function ItemRepository (items) {
    this.itemDefinition = items[0].itemDefinition;
    this.items = items;
    this.filters = [];
}

ItemRepository.prototype.getItemDefinition = function() {
    return this.itemDefinition;
};

ItemRepository.prototype.listAllItems = function (sortOption) {
    var filtered = this.filter(this.filters, this.items);
    var sorted = sortOption.sort(filtered);
    return sorted;
};


ItemRepository.prototype.filter = function (filters, items) {
    var filteredItems = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (this.matches(filters, item)) {
            filteredItems.push(item);
        }
    }
    return filteredItems;
};

ItemRepository.prototype.matches = function (filters, item) {
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (! filter.matches(item)) {
            return false;
        }
    }
    return true;
};

ItemRepository.prototype.registerFilter = function (filter) {
    this.filters.push(filter);
}