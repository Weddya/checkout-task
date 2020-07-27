/* Validating */
$('.js-form').submit(function( event ) {
  event.preventDefault();

  if (!validateForm()) { 
    popupOpen('Error', 'Check the correctness of the entered data.'); 
  } else {
    popupOpen('Success!', 'The form has been completed successfully.');
  }
});

function validateNumField(fieldValue, fieldLength) {
  fieldValue = fieldValue.replace(/\s/g, '');
  let regexp = new RegExp('^[0-9]{' + fieldLength + '}$');

  return (fieldValue.search(regexp) != -1);
}

function validateForm() {
  let activeTab = $('.js-tab-content.active');
  let fields = activeTab.find($('input'));
  let requiredFields = fields.filter(function() {
    return $(this).parent().find('.js-label.required').length > 0;
  });

  //Check empty fields
  for (let i = 0; i < requiredFields.length; i++) {
     if (requiredFields[i].value.trim() == "")
      return false;
  }
  
  //Check num fields
  if (activeTab[0].dataset.tab == "1") {
    let creditCardNumValue = $('.js-card-number').val();
    if (!validateNumField(creditCardNumValue, 16))
      return false;

    let validDateMmValue = $('.js-valid-date-mm').val();
    if (!validateNumField(validDateMmValue, 2))
      return false;

    let validDateYyValue = $('.js-valid-date-yy').val();
    if (!validateNumField(validDateYyValue, 2))
      return false;

    let cvvValue = $('.js-cvv').val();
    if (!validateNumField(cvvValue, 3))
      return false;
  }

  //Check terms checkbox
  if (!$('.js-terms-checkbox').prop('checked'))
    return false;

  return true;
}