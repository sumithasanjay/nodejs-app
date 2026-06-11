document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  // Get input fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const ticket = document.getElementById("ticket-type");
  const mealOptions = document.getElementsByName("meal");

  // Error elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const ticketError = document.getElementById("ticket-error");
  const mealError = document.getElementById("meal-error");


    // === THEME TOGGLE ===
  const themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeToggleBtn.textContent = "☀️ Light Mode";
    } else {
      themeToggleBtn.textContent = "🌙 Dark Mode";
    }
  });



  // Validation functions
  function validateName() {
    if (name.value.trim().length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      name.classList.add("error-border");
      return false;
    }
    nameError.textContent = "";
    name.classList.remove("error-border");
    return true;
  }

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      email.classList.add("error-border");
      return false;
    }
    emailError.textContent = "";
    email.classList.remove("error-border");
    return true;
  }

  function validatePhone() {
    const regex = /^[0-9]{10,15}$/; // only digits, 10-15 length
    if (!regex.test(phone.value.trim())) {
      phoneError.textContent = "Phone must be 10–15 digits.";
      phone.classList.add("error-border");
      return false;
    }
    phoneError.textContent = "";
    phone.classList.remove("error-border");
    return true;
  }

  function validateTicket() {
    if (ticket.value === "") {
      ticketError.textContent = "Please select a ticket type.";
      ticket.classList.add("error-border");
      return false;
    }
    ticketError.textContent = "";
    ticket.classList.remove("error-border");
    return true;
  }

  function validateMeal() {
    let selected = false;
    mealOptions.forEach((meal) => {
      if (meal.checked) selected = true;
    });

    if (!selected) {
      mealError.textContent = "Please select a meal preference.";
      return false;
    }
    mealError.textContent = "";
    return true;
  }

  // Add event listeners for real-time validation
  name.addEventListener("input", validateName);
  email.addEventListener("input", validateEmail);
  phone.addEventListener("input", validatePhone);
  ticket.addEventListener("change", validateTicket);
  mealOptions.forEach((meal) => meal.addEventListener("change", validateMeal));

  // Final form validation on submit
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default submission first

    const isValid =
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validateTicket() &&
      validateMeal();

    if (isValid) {
      alert("✅ Registration Successful!");
      form.reset();
    } else {
      alert("⚠️ Please fix the errors before submitting.");
    }
  });
});
