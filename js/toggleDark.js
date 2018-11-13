var myStorage = window.localStorage;

function toggleDark() {
  if (myStorage.getItem('dark')) {
    $("p").removeClass("darkModeText");
    $("h1").removeClass("darkModeText");
    $("h2").removeClass("darkModeText");
    $("h3").removeClass("darkModeText");
    $("a").removeClass("darkModeText");
    $("body").removeClass("darkBackground");
    $("nav").removeClass("darkBackground");
    myStorage.removeItem('dark');
  } else {
    $("p").addClass("darkModeText");
    $("h1").addClass("darkModeText");
    $("h2").addClass("darkModeText");
    $("h3").addClass("darkModeText");
    $("a").addClass("darkModeText");
    $("body").addClass("darkBackground");
    $("nav").addClass("darkBackground");
    myStorage.setItem('dark', true);
  }

}

function setup() {
  var button = $("#darkModeButton");
  myStorage.setItem('clicked', false);
  button.on("click", function () {
    toggleDark();
    myStorage.setItem('clicked', true);
  });
  var darkModeActive = myStorage.getItem('dark') && myStorage.getItem('clicked');
  if (darkModeActive) {
    toggleDark();
  }
}