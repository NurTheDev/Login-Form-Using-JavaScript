document.addEventListener("DOMContentLoaded", function () {
  const adminName = "nurislam";
  const adminPass = 1234566;
  const userName = document.getElementById("username");
  const password = document.getElementById("password");
  const button = document.getElementById("btn");
  button.disabled = true;
  let names = "";
  let pass = "";

  const getValue = () => {
    userName.addEventListener("input", (e) => {
      names = e.target.value;
      isAdmin(); // Call isAdmin whenever the username changes
    });
    password.addEventListener("input", (e) => {
      pass = e.target.value;
      isAdmin(); // Call isAdmin whenever the password changes
    });
  };

  const isAdmin = () => {
    if (names.toLocaleLowerCase() === adminName && pass == adminPass) {
      button.style.background = "green";
      button.disabled = false;
    } else if (names === "" || pass === "") {
      button.style.background = "#0096a5";
      button.disabled = true;
    } else {
      button.style.background = "red";
      button.disabled = true;
    }
  };
  getValue();
  button.addEventListener("click", () => {
    alert("You are successfully logged in");
  });
});
