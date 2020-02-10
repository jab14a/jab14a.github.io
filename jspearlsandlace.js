//Javascript for Contact.html
//Begins
//Allows for change of colors when focusing on three input boxes in contact
function focusFun(num) {
  "use strict";
  if (num === 1) {
    document.getElementById("name").style.background = "#e7b8a6";
  } else if (num === 2) {
    document.getElementById("email").style.background = "#e7b8a6";
  } else {
    document.getElementById("message").style.background = "#e7b8a6";
  }
}
//Allows for change of colors when not focusing on three input boxes in contact
function blurFun(num) {
  "use strict";
  if (num === 1) {
    document.getElementById("name").style.background = "white";
  } else if (num === 2) {
    document.getElementById("email").style.background = "white";
  } else {
    document.getElementById("message").style.background = "white";
  }
}
//Allows for user to submit a request and send an email to host
function formSubmit(form) {
  //window.location = "mailto:joel.butler1996@gmail.com";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var randomNum = Math.floor((Math.random() * 10000) + 1);
  var inquire = "INQ-" + randomNum;

  if (name === "Name..." || email === "Email..." || message === "Message...") {
    window.alert("You have to fill out all three fields.");
  } else {
    window.location.href = "mailto:stephanie.fischer1012@gmail.com?subject=Consulting Inquiry&body=Name: " + name
    + "%0d%0a%0d%0aEmail: " + email + "%0d%0a%0d%0aInquiry Number: " + inquire + "%0d%0a%0d%0aInquiry Question:%0d%0a" + message;
  }
}
//Ends
//Javascript for Contact.html
