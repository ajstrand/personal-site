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

function toggleDescriptions() {
  var $project = $(".projects .project");
  var $desc = $(".desc");
  $project.on("click", function() {
    for (let i = 0; i < $desc.length; i++) {
      const element = $desc[i];
      $(element).css("display", "none");
    }
    var currentDesc = parseInt($(this).attr("data"));

    if ($($desc[currentDesc]).css("display") === "block") {
      $($desc[currentDesc]).css("display", "none");
    } else {
      $($desc[currentDesc]).css("display", "block");
    }
  });
}

$(document).on("ready", function() {
  type();
  toggleDescriptions();
});
