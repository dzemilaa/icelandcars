function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(64.13640504076305, -21.88796223858081),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");

  var inputs = form.querySelectorAll("input, textarea");
  inputs.forEach(function (input) {
    var hintMessage = document.getElementById(input.id + "Hint");

    input.addEventListener("mouseover", function () {
      hintMessage.style.display = "block";
    });

    input.addEventListener("mouseout", function () {
      hintMessage.style.display = "none";
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    var firstNameError = document.getElementById("fnameError");
    var lastNameError = document.getElementById("lnameError");
    var emailError = document.getElementById("emailError");
    var subjectError = document.getElementById("subjectError");

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";

    var firstNamePattern = /^[A-Z][a-z]{4,12}$/;
    if (!firstNamePattern.test(firstName)) {
      firstNameError.textContent = "Please enter a valid first name (5-13 characters).";
    }

    var lastNamePattern = /^[A-Z][a-z]{2,19}$/;
    if (!lastNamePattern.test(lastName)) {
      lastNameError.textContent = "Please enter a valid last name (3-20 characters).";
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
    }

    var subjectPattern = /^[^\d]+$/;
    if (!subjectPattern.test(subject)) {
      subjectError.textContent = "Subject cannot contain numbers and must be within 255 characters.";
    }

    if (firstNameError.textContent || lastNameError.textContent || emailError.textContent || subjectError.textContent) {
      return;
    }
    
    var message = encodeURIComponent("Your message has been successfully sent!");
    window.location.href = "sent.html?message=" + message;
  });

  var firstNameInput = document.getElementById("fname");
  firstNameInput.addEventListener("input", function () {
    var firstName = firstNameInput.value;
    var firstNameError = document.getElementById("fnameError");
    var firstNamePattern = /^[A-Z][a-z]{4,12}$/;

    if (!firstNamePattern.test(firstName)) {
      firstNameError.textContent = "Please enter a valid first name (5-13 characters) starting with an uppercase letter.";
    } else {
      firstNameError.textContent = "";
    }
  });

  var lastNameInput = document.getElementById("lname");
  lastNameInput.addEventListener("input", function () {
    var lastName = lastNameInput.value;
    var lastNameError = document.getElementById("lnameError");
    var lastNamePattern = /^[A-Z][a-z]{2,19}$/;

    if (!lastNamePattern.test(lastName)) {
      lastNameError.textContent = "Please enter a valid last name (3-20 characters) starting with an uppercase letter.";
    } else {
      lastNameError.textContent = "";
    }
  });

  var subjectInput = document.getElementById("subject");
  subjectInput.addEventListener("input", function () {
    var subject = subjectInput.value;
    var subjectError = document.getElementById("subjectError");
    var subjectPattern = /^[^\d]+$/;

    if (!subjectPattern.test(subject)) {
      subjectError.textContent = "Subject cannot contain numbers and must be within 255 characters.";
    } else {
      subjectError.textContent = "";
    }
  });
});

