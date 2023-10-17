const bigCircle = document.getElementById("big-circle");
const member = document.getElementById("member");
const nonMember = document.getElementById("non-member");
const signUpForm = document.getElementById("sign-up");
const logInForm = document.getElementById("log-in");
const ratings = document.getElementById("ratings");
const officers = document.getElementById("officers");

let toggleSignUp = () => {
  bigCircle.style.transform = "translate(12%, -50%)";
  setTimeout(() => {
    nonMember.classList.toggle("hide-left");
    ratings.classList.toggle("hide-left");
  }, 300);

  setTimeout(() => {
    // member.classList.toggle("show");
    member.classList.toggle("hide-right");
    signUpForm.classList.toggle("hide-right");
    logInForm.classList.toggle("hide-left");
    officers.classList.toggle("hide-right");
  }, 500);
};

let toggleLogIn = () => {
  bigCircle.style.transform = "translate(-84%, -50%)";
  setTimeout(() => {
    member.classList.toggle("hide-right");
    officers.classList.toggle("hide-right");
  }, 300);

  setTimeout(() => {
    // member.classList.toggle("show");
    nonMember.classList.toggle("hide-left");
    logInForm.classList.toggle("hide-left");
    signUpForm.classList.toggle("hide-right");
    ratings.classList.toggle("hide-left");
  }, 500);
};

function handlePasswordInput(passwordId, iconClass) {
  const passwordInput = document.getElementById(passwordId);
  const eyeIcons = document.querySelectorAll(`.${iconClass}`);

  const hasValue = passwordInput.value.length > 0;

  eyeIcons.forEach(icon => {
      icon.style.opacity = hasValue ? 0.5 : 0;
  });
}

let togglePasswordVisibility = (passwordId, iconClass) => {
  const passwordInput = document.getElementById(passwordId);
  const eyeIcons = document.querySelectorAll(`.${iconClass}`);

  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

  eyeIcons.forEach(icon => {
    icon.classList.toggle('fa-eye-slash', passwordInput.type === 'password');
    icon.classList.toggle('fa-eye', passwordInput.type === 'text');
  });
};
