//rectangle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    //w
    const rectangleWidthField = getUserInputFieldId('rectangle-width');
    checkValidNumber(rectangleWidthField);
    setTextElementById('rectangle-width-element', rectangleWidthField);
    //l
    const rectangleLengthField = getUserInputFieldId('rectangle-length');
    checkValidNumber(rectangleLengthField);
    setTextElementById('rectangle-length-element', rectangleLengthField);
    //calculate
    const rectangleResult = rectangleWidthField * rectangleLengthField;
    setTextElementById('rectangle-calc-element', rectangleResult);
    //visible
    visibleListItem('visible-rectangle');
});