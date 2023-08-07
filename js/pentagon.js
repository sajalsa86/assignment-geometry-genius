document.getElementById('pentagon-btn').addEventListener('click', function () {
    const pentagonPField = getUserInputFieldId('pentagon-p-field');
    checkValidNumber(pentagonPField);
    setTextElementById('pentagon-p-element', pentagonPField);

    const pentagonBField = getUserInputFieldId('pentagon-b-field');
    checkValidNumber(pentagonPField);
    setTextElementById('pentagon-b-element', pentagonBField);
    const pentagon = 0.5;
    const pentagonResult = pentagon * pentagonPField * pentagonBField;
    setTextElementById('pentagon-calc-element', pentagonResult);
    visibleListItem('visible-pentagon');
});

