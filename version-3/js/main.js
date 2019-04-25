$(document).ready(function() {
  let cloneInput = $("#change").clone();
  $("#change").remove();

  $("#show-revision").change(function() {
    if ($(this).is(":checked")) {
      $("#change").remove();
      cloneInput.insertAfter("#show-revision");
    }
  });

  $("#yes").change(function() {
    if ($(this).is(":checked")) {
      $("#change").remove();
    }
  });
});
