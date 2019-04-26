$(document).ready(function() {
  let cloneYes = $("#yes-i-know").clone();
  let cloneNo = $("#no-i-dont-know").clone();

  var obj = document.createElement("audio");
  obj.volume = 1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $("#yes-i-know").remove();
  $("#no-i-dont-know").remove();

  $("#yes").change(function() {
    if ($(this).is(":checked")) {
      $("#yes-i-know").remove();
      $("#no-i-dont-know").remove();
      obj.src = "./js/comedy_swipe_001.mp3";
      obj.play();
      cloneYes.insertAfter("#show-days");
    }
  });

  $("#show-days").change(function() {
    if ($(this).is(":checked")) {
      $("#yes-i-know").remove();
      $("#no-i-dont-know").remove();
      obj.play();
      obj.src = "./js/comedy_swipe_001.mp3";
      cloneNo.insertAfter("#show-days");
    }
  });

  $("#bell").focus(function() {
    obj.src = "./js/tspt_pull_bell_02_065.mp3";
    obj.play();
  });
});
