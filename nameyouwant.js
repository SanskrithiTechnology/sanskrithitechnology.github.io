var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxpIh9Ip-rg3EknHp7QuXU0X1G-J7AviuNSCyoCkl5P8jgulcM/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})