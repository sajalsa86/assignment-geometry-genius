//triangle
document.getElementById('triangle-btn').addEventListener('click', function () {
    //base
    const triangleBaseField = getUserInputFieldId('triangle-base-field');
    checkValidNumber(triangleBaseField);
    setTextElementById('triangle-base-element', triangleBaseField);
    //height
    const triangleHeightField = getUserInputFieldId('triangle-height-field');
    //checkValidNumber(triangleHeightField);
    setTextElementById('triangle-height-element', triangleHeightField);
    //calculate
    const triangleValue = 0.5;
    const trianglResult = triangleValue * triangleBaseField * triangleHeightField;

    setTextElementById('triangle-calc-element', trianglResult);
    //visible
    visibleListItem('visible-triangle');
});