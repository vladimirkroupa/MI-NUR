function ItemTable (jQuery) {
    this.jQ = jQuery;
}

ItemTable.prototype.drawTable = function (jTableContainer, itemDefinition, items) {
    var jTable = this.createTable(itemDefinition, items);
    jTable.appendTo(jTableContainer);
    return;
};

ItemTable.prototype.createTable = function (itemDefinition, items) {
    var jTable = this.jQ('<table></table>');
    var jTHead = this.createTableHeader(itemDefinition);
    var jTBody = this.createTableBody(items);
    jTHead.appendTo(jTable);
    jTBody.appendTo(jTable);
    return jTable;
};

ItemTable.prototype.createTableHeader = function (itemDefinition) {
    var jTHRow = this.jQ('<tr></tr>');
    var that = this;
    this.jQ.each(itemDefinition.getAttributesInOrder(), function (ix, attribute) {
        var jTData = that.jQ('<td></td>');
        jTData.append(document.createTextNode(attribute));
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