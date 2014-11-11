function ItemRepository (items) {
    this.itemDefinition = items[0].itemDefinition;
    this.items = items;
}

ItemRepository.prototype.getItemDefinition = function() {
    return this.itemDefinition;
};

ItemRepository.prototype.listAllItems = function (sortOption, filteringCriteria) {
    var filtered = filteringCriteria.filter(this.items);
    var sorted = sortOption.sort(filtered);
    return sorted;
};



