function ItemTable (jQuery, jTableContainer, itemRepository, sortOption, filteringCriteria) {
    this.jQ = jQuery;
    this.itemRepository = itemRepository;
    this.sortOption = sortOption;
    this.filteringCriteria = filteringCriteria;
    this.jTableContainer = jTableContainer;
}

ItemTable.prototype.getItemDefinition = function () {
    return this.itemRepository.getItemDefinition();
};

ItemTable.prototype.drawTable = function () {
    var items = this.itemRepository.listAllItems(this.sortOption, this.filteringCriteria);
    var jTable = this.createTable(items, this.sortOption);

    var jOldTable = this.jTableContainer.find('table');
    if (jOldTable.length === 0) {
        jTable.appendTo(this.jTableContainer);
    } else {
        jOldTable.replaceWith(jTable);
    }
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
        var jTHeader = that.jQ('<th></th>');
        jTHeader.append(document.createTextNode(attribute.getName()));
        if (sortOption.sortsAttribute(attribute)) {
            sortOption.addSortIndicatorClass(jTHeader);
        }
        that.addSortHandler(attribute, jTHeader);
        jTHeader.appendTo(jTHRow);
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

ItemTable.prototype.addSortHandler = function (attribute, jTHeader) {
    var that = this;
    jTHeader.click(function () {
        that.changeSortCriteria(attribute);
        that.drawTable();
    });
};

ItemTable.prototype.changeSortCriteria = function (newSortAttribute) {
    if (this.sortOption.sortsAttribute(newSortAttribute)) {
        this.sortOption = this.sortOption.flip();
    } else {
        this.sortOption = new AscendingSort(newSortAttribute);
    }
};
