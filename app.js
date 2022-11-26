const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const rollNumber = document.querySelector("#rollno");
//animation
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//register-suggestion form logic
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function showErr(input, message) {
  const inputField = input.parentElement;
  inputField.className = "input-field error";
  const small = inputField.querySelector("small");
  small.innerText = message;
}

function showSucc(input) {
  const inputField = input.parentElement;
  inputField.className = "input-field success";
}
function checkEmail(input) {
  const re = /[a-zA-Z]@(nith)\.ac.in\b$/g;
  if (re.test(input.value.trim())) {
    showSucc(input);
  } else {
    showErr(
      input,
      "Email is not valid please register via your college account"
    );
  }
}

function checkGender(input) {
  if (input.value === "M" || input.value === "F") {
    showSucc(input);
  } else {
    showErr(input, "Please enter M or F");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showErr(input, `${getFieldname(input)} is required`);
    } else {
      showSucc(input);
    }
  });
}
function getFieldname(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showErr(input, `${getFieldname(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showErr(
      input,
      `${getFieldname(input)} must be less than ${max} characters`
    );
  } else {
    showSucc(input);
  }
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  checkRequired([name, email, gender, rollno]);

  checkLength(name, 3, 15);

  checkGender(gender);

  checkEmail(email);
});
