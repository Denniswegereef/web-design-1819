$(document).ready(function() {
  let cloneYes = $("#yes-i-know").clone();
  let cloneNo = $("#no-i-dont-know").clone();

  $("#yes-i-know").remove();
  $("#no-i-dont-know").remove();

  $("#yes").change(function() {
    if ($(this).is(":checked")) {
      $("#yes-i-know").remove();
      $("#no-i-dont-know").remove();
      cloneYes.insertAfter("#show-days");
    }
  });

  $("#show-days").change(function() {
    if ($(this).is(":checked")) {
      $("#yes-i-know").remove();
      $("#no-i-dont-know").remove();
      cloneNo.insertAfter("#show-days");
    }
  });
});
