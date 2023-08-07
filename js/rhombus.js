document.getElementById('rhombus-btn').addEventListener('click', function () {

    const rhombusBaseField = getUserInputFieldId('rhombus-base');
    checkValidNumber(rhombusBaseField);
    setTextElementById('rhombus-base-element', rhombusBaseField);
    const rhombusHeightField = getUserInputFieldId('rhombus-height');
    checkValidNumber(rhombusHeightField);
    setTextElementById('rhombus-height-element', rhombusHeightField);
    const rhombus = 0.5;
    const rhombusResult = rhombus * rhombusBaseField * rhombusHeightField;
    setTextElementById('rhombus-calc-element', rhombusResult);
    visibleListItem('visible-rhombus');


});