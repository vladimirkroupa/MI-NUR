function ItemTable (jQuery, jTableContainer, itemRepository, defaultSortOption) {
    this.jQ = jQuery;
    this.itemRepository = itemRepository;
    this.defaultSortOption = defaultSortOption;
    this.sortOption = defaultSortOption;
    this.filteringCriteriaMap = {};
    this.jTableContainer = jTableContainer;
}

ItemTable.prototype.setAttributeFilter = function (attribute, filter) {
    this.filteringCriteriaMap[attribute] = filter;
};

ItemTable.prototype.getItemDefinition = function () {
    return this.itemRepository.getItemDefinition();
};

ItemTable.prototype.drawTable = function () {
    var items = this.itemRepository.listAllItems(this.sortOption, Object.values(this.filteringCriteriaMap));
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
    var jTHead = this.createTableHead(this.getItemDefinition(), this.sortOption);
    var jTBody = this.createTableBody(items);
    jTHead.appendTo(jTable);
    jTBody.appendTo(jTable);
    return jTable;
};

ItemTable.prototype.createTableHead = function (itemDefinition, sortOption) {
    var jTHRow = this.jQ('<tr></tr>');
    var that = this;
    this.jQ.each(itemDefinition.getAttributesInOrder(), function (ix, attribute) {
        var jDialog = that.initFilterDialog(attribute, jFiltering);

        var jTHeader = that.jQ('<th></th>');

        var sorting = that.jQ('<span class="sort"></span>').appendTo(jTHeader);
        var headerTxt = document.createTextNode(attribute.getName());
        var headerSpan = that.jQ('<span class="header"></span>').appendTo(jTHeader);
        headerSpan.append(headerTxt);
        var jFiltering = that.jQ('<span class="filter">⋮</span>');

        jFiltering.click(function () {
            jDialog.show();
        });
        jFiltering.appendTo(jTHeader);
        if (sortOption.sortsAttribute(attribute)) {
            sortOption.addSortIndicatorClass(sorting);
        }
        that.addSortHandlers(attribute, headerSpan);
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

ItemTable.prototype.addSortHandlers = function (attribute, jElem) {
    var that = this;
    jElem.click(function () {
        that.changeSortCriteria(attribute);
        that.drawTable();
    });

    this.jQ('body').on("sortReset", function () {
       that.defaultSortCriteria();
       that.drawTable();
    });
};

ItemTable.prototype.defaultSortCriteria = function () {
    this.sortOption = this.defaultSortOption;
};

ItemTable.prototype.changeSortCriteria = function (newSortAttribute) {
    if (this.sortOption.sortsAttribute(newSortAttribute)) {
        this.sortOption = this.sortOption.flip();
    } else {
        this.sortOption = new AscendingSort(newSortAttribute);
    }
};

ItemTable.prototype.initFilterDialog = function (attribute, jDialogButton) {
    var dialog = new FilterDialog(this.jQ, attribute.name);
    var jDialogDiv = dialog.getDialogContainer();

    var filterViewCF = attribute.filterViewCF();
    var filterView = new filterViewCF(this.jQ, jDialogDiv, attribute);
    filterView.registerListener(itemTable);
    itemRepo.registerFilter(filterView.getFilter());

    jDialogDiv.appendTo(this.jQ('div#filters'));
    jDialogDiv.hide();
    return jDialogDiv;
};

ItemTable.prototype.notify = function () {
    this.drawTable();
};