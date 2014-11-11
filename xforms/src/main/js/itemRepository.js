function ItemRepository () {
    this.items = [
        new Item(itemDef, '12345', 'rumrburt'),
        new Item(itemDef, '23456', 'prasopes'),
        new Item(itemDef, '34567', 'mildice'),
        new Item(itemDef, '45678', 'pistice')
    ];
}

ItemRepository.prototype.listAllItems = function (sortOption, filteringCriteria) {
    var filtered = filteringCriteria.filter(this.items);
    var sorted = sortOption.sort(filtered);
    return sorted;
};



