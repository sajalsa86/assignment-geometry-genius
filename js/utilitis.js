//function-1
function getUserInputFieldId(fieldId) {

    const userField = document.getElementById(fieldId);
    const userFieldString = userField.value;
    const userFieldValue = parseFloat(userFieldString);
    userField.value = '';
    return userFieldValue;
};

//function-2
function checkValidNumber(value) {
    if (isNaN(value)) {
        alert('Please enter a valid number.');
        throw new Error('Invalid number');
    }
};

//function-3
function setTextElementById(textElement, elementValue) {
    const getTextElement = document.getElementById(textElement);
    getTextElement.innerText = elementValue;
};

//function-4
function visibleListItem(visibledId) {
    let visibleItem = document.getElementById(visibledId);
    visibleItem.style.display = 'block';

};

































/* 
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleBaseField = document.getElementById('triangle-base-field');
    const triangleBaseValueString = triangleBaseField.value;
    const triangleBaseValue = parseFloat(triangleBaseValueString);


    const baseElement = document.getElementById('triangle-base');
    const baseElementString = baseElement.innerText;
    const baseElementValue = parseFloat(baseElementString);

    baseElement.innerText = triangleBaseValue;
});  */