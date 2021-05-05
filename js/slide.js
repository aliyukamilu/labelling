$(document).ready(function () {
  $(".registration-form fieldset:first-child").fadeIn("fast");

  // next step
  $(".registration-form .btn-next").on("click", function () {
    var parent_fieldset = $(this).parents("fieldset");
    var next_step = true;

    if (next_step) {
      parent_fieldset.fadeOut(400, function () {
        $(this).next().fadeIn();
      });
    }
  });

  // previous step
  $(".registration-form .btn-previous").on("click", function () {
    $(this)
      .parents("fieldset")
      .fadeOut(400, function () {
        $(this).prev().fadeIn();
      });
  });
});

$(document).ready(function () {
  $(".dataTable").DataTable();
});
