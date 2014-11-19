function Positioner () {

}


/**
 * @returns {positionCenter} function that positions given object on center (both horizontally and vertically)
 */
Positioner.centerPositioning = function positionCenter(object, requestedHeight, requestedWidth) {

    function objectLeftPos() {
        var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (viewWidth - requestedWidth) / 2
    }

    function objectTopPos() {
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (viewHeight - requestedHeight) / 2
    }

    object.style.top = objectTopPos() + 'px';
    object.style.left = objectLeftPos() + 'px';

};

/**
 *
 * @param offset offset from bounding element
 * @returns {position} function that positions given object relative to given bounding element
 */
Positioner.relativeToElementPositioning = function position(object, requestedHeight, requestedWidth, boundingElem, offsetFromElem) {

    function objectLeftPos(termBoundingRect) {
        var rect = termBoundingRect;
        var termWidth = rect.right - rect.left;
        var diaLeft = rect.left - requestedWidth / 2 + termWidth / 2;
        var diaRight = diaLeft + requestedWidth;
        if (diaLeft < 0) {
            return 0;
        } else if (diaRight > document.documentElement.clientWidth - offsetFromElem) {
            return document.documentElement.clientWidth - requestedWidth - offsetFromElem;
        } else {a
            return diaLeft;
        }
    }

    function objectTopPos(termBoundingRect) {
        var rect = termBoundingRect;
        var diaTop = rect.top - requestedHeight - offsetFromElem;
        if (diaTop > 0) {
            return diaTop;
        } else {
            return rect.bottom + offsetFromElem;
        }
    }

    var rect = boundingElem.getBoundingClientRect();
    object.style.left = objectLeftPos(rect) + 'px';
    object.style.top = objectTopPos(rect) + 'px';

};