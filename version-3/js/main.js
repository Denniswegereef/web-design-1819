$(document).ready(function() {
  let cloneInput = $("#change").clone();
  $("#change").remove();

  var obj = document.createElement("audio");
  obj.volume = 1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $("#show-revision").change(function() {
    if ($(this).is(":checked")) {
      $("#change").remove();
      obj.src = "./js/comedy_swipe_001.mp3";
      obj.play();
      cloneInput.insertAfter("#show-revision");
    }
  });

  $("#yes").change(function() {
    if ($(this).is(":checked")) {
      $("#change").remove();
    }
  });

  $("#bell").focus(function() {
    obj.src = "./js/tspt_pull_bell_02_065.mp3";
    obj.play();
  });
});
