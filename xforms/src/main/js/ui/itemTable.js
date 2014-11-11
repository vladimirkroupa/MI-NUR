function ItemTable (jQuery, itemRepository, sortOption, filteringCriteria) {
    this.jQ = jQuery;
    this.itemRepository = itemRepository;
    this.sortOption = sortOption;
    this.filteringCriteria = filteringCriteria;
}

ItemTable.prototype.getItemDefinition = function () {
    return this.itemRepository.getItemDefinition();
};

ItemTable.prototype.drawTable = function (jTableContainer) {
    var items = this.itemRepository.listAllItems(this.sortOption, this.filteringCriteria);
    var jTable = this.createTable(items, this.sortOption);
    jTable.appendTo(jTableContainer);
    return;
};

ItemTable.prototype.createTable = function (items) {
    var jTable = this.jQ('<table></table>');
    var jTHead = this.createTableHeader(this.getItemDefinition(), this.sortOption);
    var jTBody = this.createTableBody(items);
    jTHead.appendTo(jTable);
    jTBody.appendTo(jTable);
    return jTable;
};

ItemTable.prototype.createTableHeader = function (itemDefinition, sortOption) {
    var jTHRow = this.jQ('<tr></tr>');
    var that = this;
    this.jQ.each(itemDefinition.getAttributesInOrder(), function (ix, attribute) {
        var jTData = that.jQ('<th></th>');
        jTData.append(document.createTextNode(attribute));
        if (sortOption.sortsAttribute(attribute)) {
            sortOption.addSortIndicatorClass(jTData);
        }
        jTData.appendTo(jTHRow);
    });
    var jTHead = this.jQ('<thead></thead>');
    jTHRow.appendTo(jTHead);
    return jTHead;
};

ItemTable.prototype.createTableBody = function (items) {
    var jTBody = this.jQ('<tbody></tbody>');
    var that = this;
    this.jQ.each(items, function (ix, item) {
        var jRow = that.createTableRow(item);
        jRow.appendTo(jTBody);
    });
    return jTBody;
};

ItemTable.prototype.createTableRow = function (item) {
    var jRow = this.jQ('<tr></tr>');
    var that = this;
    this.jQ.each(item.getValuesInOrder(), function(ix, value) {
        var jTd = that.jQ('<td></td>').append(document.createTextNode(value));
        jTd.appendTo(jRow);
    });
    return jRow;
};

//ItemTable.prototype.