//hide
//slidUp
//show
//change

$(document).ready(function () {
  $("#btn1").click(function () {
    $("#content1").toggle(1000);
    $("#content1").show(2000);

    $("#par1").append("info");
  });
});

// $("#dark1").click(function () {
//   let dark = document.getElementById("dark1");
//   dark.innerHTML = "light";
//   $("body").toggleClass("dark-mode light-mode");
// });

$(document).ready(function () {
  $("#dark1").click(function () {
    if ($(this).text() === "Dark") {
      $(this).text("Light");
    } else {
      $(this).text("Dark");
    }
    $("body").toggleClass("dark-mode light-mode");
  });
});

$("#up").click(function () {
  $("html , body ").animate({ scrollTop: 0 }, 500);
});

$(document).ready(function () {
  $("#my-form").submit(function (event) {
    var isvalid = true;
    $(".error").hide();

    if ($("#name").val().trim() === "") {
      $("#name-error").show();
      isvalid = false;
    }

    if ($("#email1").val().trim() === "") {
      $("#email-error").show();
      isvalid = false;
    }

    if ($("#num").val().trim() === "") {
      $("#age-error").show();
      isvalid = false;
    }
    if (!isvalid) {
      event.preventDefault();
    } else {
      alert("All data sent!");
    }
  });
});
