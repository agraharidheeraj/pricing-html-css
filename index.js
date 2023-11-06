// Get the checkbox element and all the price elements
const checkbox = document.getElementById('switch');
const basicPrice = document.getElementById('basic');
const professionalPrice = document.getElementById('Professional');
const masterPrice = document.getElementById('Master');

// Add an event listener to the checkbox to handle the price change
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        // When the checkbox is checked, update the prices
        basicPrice.innerHTML = '<small>&dollar; </small> 19.99';
        professionalPrice.innerHTML = '<small>&dollar; </small> 24.99';
        masterPrice.innerHTML = '<small>&dollar; </small> 39.99';
    } else {
        // When the checkbox is unchecked, reset the prices
        basicPrice.innerHTML = '<small>&dollar; </small> 199.99';
        professionalPrice.innerHTML = '<small>&dollar; </small> 249.99';
        masterPrice.innerHTML = '<small>&dollar; </small> 399.99';
    }
});
