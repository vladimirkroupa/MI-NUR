FilterDialog.DIALOG_WIDTH = 300;
FilterDialog.DIALOG_HEIGHT = 250;
FilterDialog.DIALOG_OFFSET = 5;


function FilterDialog (jQuery, headerText) {
    this.jQ = jQuery;
    this.jDialogDiv = null;

    this.jDialogDiv = this.jQ('<div class="dialog"></div>');
    var jCloseDiv = this.jQ('<div class="dialog_close"><img src="img/stop32.png" height="12px" width="12px"></div>');

    var that = this;
    jCloseDiv.click(function () {
        that.jDialogDiv.hide();
    });
    jCloseDiv.appendTo(this.jDialogDiv);

    var jHeader = this.jQ('<div class="dialog_header"></div>');
    var jHeaderTitle = this.jQ('<span class="dialog_title">'+ headerText +'</span></div>');
    var jHeaderIcon = this.jQ('<img class="dialog_header_icon" src="img/Book_alt16.png">');
    jHeaderIcon.appendTo(jHeader);
    jHeaderTitle.appendTo(jHeader);
    jHeader.appendTo(this.jDialogDiv);

    var jContentDiv = this.jQ('<div class="dialog_content"></div>');
    jContentDiv.appendTo(this.jDialogDiv);
}

FilterDialog.prototype.getDialogContainer = function () {
    return this.jDialogDiv;
};