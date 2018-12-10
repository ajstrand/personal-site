function toggleDark() {
  var button = $("#darkModeButton");
  if (myStorage.getItem('dark')) {
    $("p").removeClass("darkModeText");
    $("h1").removeClass("darkModeText");
    $("h2").removeClass("darkModeText");
    $("h3").removeClass("darkModeText");
    $("a").removeClass("darkModeText");
    $("body").removeClass("darkBackground");
    $("nav").removeClass("darkBackground");
    myStorage.removeItem('dark');
    button.text("Enable Dark Mode");
    button.removeClass("darkBackground darkModeText")
  } else {
    enableDark();
  }
}

function enableDark() {
  var button = $("#darkModeButton");
  $("p").addClass("darkModeText");
    $("h1").addClass("darkModeText");
    $("h2").addClass("darkModeText");
    $("h3").addClass("darkModeText");
    $("a").addClass("darkModeText");
    $("body").addClass("darkBackground");
    $("nav").addClass("darkBackground");
    myStorage.setItem('dark', true);
    button.text("Disable Dark Mode");
    button.addClass("darkBackground darkModeText");
}

function setup() {
  var button = $("#darkModeButton");
  myStorage.setItem('clicked', false);
  button.on("click", function () {
    toggleDark();
  });
  var darkModeActive = myStorage.getItem('dark');
  darkModeActive === "true" && darkModeActive !== null ? enableDark() : button.text("Enable Dark Mode");
}