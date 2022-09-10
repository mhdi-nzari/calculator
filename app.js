$("button.num").on("click", function () {
  var num = $(this).text();
  var screen = $(".screen");
  if (screen.text() == "0") {
    screen.text("");
  }
  var scr = screen.text();
  scr = scr + num;
  screen.text(scr);
});
$("button[data-func='clear']").on("click", function () {
  $(".screen").text("0");
});
$("button[data-func='division']").on("click", function () {
  var scr = $(".screen").text();
  scr = scr + "/";
  $(".screen").text(scr);
});
$("button[data-func='multiple']").on("click", function () {
  var scr = $(".screen").text();
  scr = scr + "*";
  $(".screen").text(scr);
});
$("button[data-func='minus']").on("click", function () {
  var scr = $(".screen").text();
  scr = scr + "-";
  $(".screen").text(scr);
});
$("button[data-func='plus']").on("click", function () {
  var scr = $(".screen").text();
  scr = scr + "+";
  $(".screen").text(scr);
});
$("button[data-func='percent']").on("click", function () {
  var scr = $(".screen").text();
  var res = eval(-1 * scr);
  $(".screen").text(res);
});
$("button[data-func='result']").on("click", function () {
  var scr = $(".screen").text();
  var res = eval(scr);
  $(".screen").text(res);
});

