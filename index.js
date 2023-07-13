function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getname());
  $("#Email").text(profile.getEmail());
  $("#image").attr(src,profile.getimageurl());
  $(".data").css("diplay","block");
  $(".g-signin2").css("display","none")
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You Have Signed Out Successfully");
      $(".g-signin2").css("display","block")
      $(".data").css("diplay","none");
  });
  }