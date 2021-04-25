document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "H".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "A".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "F".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == "E".charCodeAt(0)) {
      return false;
    }
    if (event.ctrlKey && event.keyCode == 85) {
      alert(
        "This function has been disabled to prevent you from stealing my code!"
      );
      return false;
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert(
        "This function has been disabled to prevent you from stealing my code!"
      );
      return false;
    }
  };
  document.attachEvent("oncontextmenu", function () {
    alert(
      "This function has been disabled to prevent you from stealing my code!"
    );
    window.event.returnValue = false;
  });
  document.addEventListener("contextmenu", function (e) {
    alert(
      "This function has been disabled to prevent you from stealing my code!"
    );
  });
  