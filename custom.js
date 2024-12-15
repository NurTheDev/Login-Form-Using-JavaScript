const adminName = "nurislam";
const adminPass = 1234566;
const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("btn");
let names = "";
let pass = "";
const getValue = () => {
  userName.addEventListener("input", (e) => {
    names = e.target.value;
  });
  password.addEventListener("input", (e) => {
    pass = e.target.value;
  });
};
getValue();
const isAdmin = () => {
  if (names.toLocaleLowerCase() === adminName) {
    button.style.background = "green";
  } else {
    button.style.background = "red";
  }
};
button.addEventListener("mouseenter", isAdmin);
