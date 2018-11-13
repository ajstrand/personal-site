function type() {
  var cont = $(".main-info .typewriter");

  var str = cont.text();
  cont.empty();

  var arr = str.split("");

  var i = 0;

  $.each(arr, function(letter, i) {
    setTimeout(function() {
      var result = cont.text() + letter;
      cont.text(result);
    }, 100 * i);
  });
}