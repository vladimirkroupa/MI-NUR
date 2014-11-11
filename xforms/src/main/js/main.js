var itemDef = new ItemDefinition(['sid', 'name'], new AscendingSort('sid'));

var items = [
    new Item(itemDef, '12345', 'rumrburt'),
    new Item(itemDef, '23456', 'prasopes'),
    new Item(itemDef, '34567', 'mildice'),
    new Item(itemDef, '45678', 'pistice')
];

var itemRepo = new ItemRepository(items);

var itemDef = itemRepo.getItemDefinition();

var sortOption = itemDef.defaultSort;

var filteringCriteria = new FilteringCriteria(
    [
        new OneOfCriterion('name', ['prasopes', 'pistice', 'mildice']),
        new ContainsTextCriterion('sid', '3')
    ]
);

var noFiltering = new FilteringCriteria([]);

var itemTable = new ItemTable(jQuery, itemRepo, sortOption, filteringCriteria);

itemTable.drawTable(jQuery('div#table'));



