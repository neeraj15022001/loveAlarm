$(".check-alert").hide();
$(".submit-button").click((event) => {
  event.preventDefault();
  let email = $(".email-field").val();
  let password = $(".password-field").val();
  console.log(email, password);
  if (email != "" && password != "") {
    signIn(email, password);
  } else {
    $(".check-alert").html("Enter Details");
    $(".check-alert").slideDown("500", () => {
      setTimeout(() => $(".check-alert").slideUp(500), 1500);
    });
  }
});
function signIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(`user is ${user}`);
      console.log(user.email)
      localStorage.setItem("currentUser", user.email);
      $(".check-alert").html("Successfully Logged In");
      $(".check-alert").slideDown("500", () => {
        setTimeout(() => {
            $(".check-alert").slideUp(500)
            window.location.assign("./dashboard.html");
        }, 3000);
      });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(
        `errorCode is ${errorCode} and errorMessage is ${errorMessage}`
      );
      $(".check-alert").html(errorMessage);
      $(".check-alert").slideDown("500", () => {
        setTimeout(() => $(".check-alert").slideUp(500), 3000);
      });
    });
}
