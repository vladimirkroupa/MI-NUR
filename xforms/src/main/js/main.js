var itemTable = new ItemTable(jQuery);

var itemDef = new ItemDefinition(['sid', 'name']);

var itemRepo = new ItemRepository();

var sortOption = new DescendingSort('sid');

var filteringCriteria = new FilteringCriteria(
    [
        new OneOfCriterion('name', ['prasopes', 'pistice', 'mildice']),
        new ContainsTextCriterion('sid', '3')
    ]
);

var noFiltering = new FilteringCriteria([]);

itemTable.drawTable(jQuery('div#table'), itemDef, itemRepo.listAllItems(sortOption, filteringCriteria));



