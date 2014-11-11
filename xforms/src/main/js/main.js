var itemTable = new ItemTable(jQuery);

var itemDef = new ItemDefinition(['sid', 'name']);

var itemRepo = new ItemRepository();

var sortOption = new DescendingSort('sid');

itemTable.drawTable(jQuery('div#table'), itemDef, itemRepo.listAllItems(sortOption));



