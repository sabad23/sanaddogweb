document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    clearErrors();

    let isValid = true;

    if (!name || name.value.trim() === "") {
      showError(name, "يرجى إدخال الاسم.");
      isValid = false;
    }

    if (!email || email.value.trim() === "") {
      showError(email, "يرجى إدخال البريد الإلكتروني.");
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, "يرجى إدخال بريد إلكتروني صحيح.");
      isValid = false;
    }

    if (!phone || phone.value.trim() === "") {
      showError(phone, "يرجى إدخال رقم الهاتف.");
      isValid = false;
    }

    if (!message || message.value.trim() === "") {
      showError(message, "يرجى كتابة الرسالة.");
      isValid = false;
    }

    if (isValid) {
      if (formStatus) {
        formStatus.textContent = "تم إرسال الرسالة بنجاح.";
      }
      contactForm.reset();
    } else {
      if (formStatus) {
        formStatus.textContent = "يرجى تصحيح الأخطاء قبل الإرسال.";
      }
    }
  });

  function showError(input, message) {
    if (!input) {
      return;
    }

    const errorElement = input.parentElement.querySelector(".error");
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error");

    errorMessages.forEach(function (error) {
      error.textContent = "";
    });

    if (formStatus) {
      formStatus.textContent = "";
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});