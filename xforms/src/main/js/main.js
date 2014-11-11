var itemTable = new ItemTable(jQuery);

var itemDef = new ItemDefinition(['sid', 'name']);
var item1 = new Item(itemDef, '12345', 'rumrburt');
var item2 = new Item(itemDef, '23456', 'prasopes');

itemTable.drawTable(jQuery('div#table'), itemDef, [item1, item2]);



