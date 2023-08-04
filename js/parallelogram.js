//parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramBaseField = getUserInputFieldId('parallelogram-base');
    checkValidNumber(parallelogramBaseField);
    setTextElementById('parallelogram-base-element', parallelogramBaseField);
    const parallelogramHeightField = getUserInputFieldId('parallelogram-height');
    checkValidNumber(parallelogramHeightField);
    setTextElementById('parallelogram-height-element', parallelogramHeightField);
    const parallelogramResult = parallelogramBaseField * parallelogramHeightField;
    setTextElementById('parallelogram-calc-element', parallelogramResult);
    visibleListItem('visible-parallelogram');
});
