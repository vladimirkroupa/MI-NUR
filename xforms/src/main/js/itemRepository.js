function ItemRepository () {
    this.items = [
        new Item(itemDef, '12345', 'rumrburt'),
        new Item(itemDef, '23456', 'prasopes')
    ];
}

ItemRepository.prototype.listAllItems = function (sortOption) {
    var sorted = sortOption.sort(this.items)
    return sorted;
};


