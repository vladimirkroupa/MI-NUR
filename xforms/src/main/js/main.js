var sid = new TextAttribute('sid');
var nameA = new TextAttribute('name');
var weight = new IntegerAttribute('weight');
var itemDef = new ItemDefinition([sid, nameA, weight], new AscendingSort(sid));

var items = [
    new Item(itemDef, '12345', 'rumrburt', '100'),
    new Item(itemDef, '23456', 'prasopes', '70'),
    new Item(itemDef, '34567', 'mildice', '12'),
    new Item(itemDef, '45678', 'pistice', '60')
];

var itemRepo = new ItemRepository(items);

var itemDef = itemRepo.getItemDefinition();

var sortOption = itemDef.defaultSort;

var filteringCriteria = new FilteringCriteria(
    [
        new OneOfCriterion(nameA, ['prasopes', 'pistice', 'mildice']),
        new ContainsTextCriterion(sid, '3')
    ]
);

var noFiltering = new FilteringCriteria([]);

var itemTable = new ItemTable(jQuery, jQuery('div#table'), itemRepo, sortOption, filteringCriteria);

itemTable.drawTable();



