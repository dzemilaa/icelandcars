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
        firstNameError.textContent = "Unesite ispravno ime ( 5-13 karaktera).";
      }
  
  
      var lastNamePattern = /^[A-Z][a-z]{2,19}$/;
      if (!lastNamePattern.test(lastName)) {
        lastNameError.textContent = "Unesite ispravno prezime ( 3-20 karaktera).";
      }
  
  
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Unesite ispravnu e-mail adresu.";
      }
  
  
      var subjectPattern = /^[^0-9]{1,255}$/;
      if (!subjectPattern.test(subject)) {
        subjectError.textContent = "Poruka ne sme da sadrži brojeve i maximalni broj karaktera iznosi 255.";
      }
  
      if (firstNameError.textContent || lastNameError.textContent || emailError.textContent || subjectError.textContent) {
        return;
      }
  
      var message = encodeURIComponent("Vaša poruka je uspešno poslana!");
      window.location.href = "sentsrb.html?message=" + message;
    });
  });
  
  var firstNameInput = document.getElementById("fname");
  firstNameInput.addEventListener("input", function () {
    var firstName = firstNameInput.value;
    var firstNameError = document.getElementById("fnameError");
    var firstNamePattern = /^[A-Z][a-z]{4,12}$/;

    if (!firstNamePattern.test(firstName)) {
      firstNameError.textContent = "Molimo unesite validno ime (5-13 karaktera) počinjući velikim slovom.";
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
      lastNameError.textContent = "Molimo unesite validno prezime (3-20 karaktera) počinjući velikim slovom.";
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
      subjectError.textContent = "Predmet ne sme sadržati brojeve i mora biti unutar 255 karaktera.";
    } else {
      subjectError.textContent = "";
    }
  });

