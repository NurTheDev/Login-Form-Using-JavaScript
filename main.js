const title = document.getElementsByTagName("title")[0];
title.innerText = "Login Form";
const body = document.getElementsByTagName("body")[0];
// Body Style
body.style.fontFamily = "Arial, sans-serif";
body.style.background = "#f9f5f5";
body.style.alignContent = "center";
body.style.justifyItems = "center";
body.style.height = "100vh";
body.style.margin = "0";
const div = document.createElement("div");
div.classList.add("login-container");
body.appendChild(div);
// Login Container style
div.style.background = "white";
div.style.padding = "20px 40px";
div.style.borderRadius = "8px";
div.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
div.style.width = "300px";

const h1 = document.createElement("h1");
h1.innerText = "Log in";
div.appendChild(h1);
h1.style.marginBottom = "20px";
h1.style.fontSize = "38px";
h1.style.color = "#333";
const p = document.createElement("p");
p.innerHTML = "New Here? <a id='link' href ='#'>Create a account....</a>";
div.appendChild(p);
const link = document.getElementById("link");
link.style.color = "#0073aa";
link.style.textDecoration = "none";
linkHover = () => {
  link.style.textDecoration = "underline";
};
link.addEventListener("mouseover", linkHover);
linkHoverOut = () => {
  link.style.textDecoration = "none";
};
link.addEventListener("mouseout", linkHoverOut);
const form = document.createElement("form");
div.appendChild(form);
const label1 = document.createElement("label");
label1.setAttribute("for", "username");
label1.innerText = "Username or Email";
form.appendChild(label1);
label1.style.display = "block";
label1.style.marginBottom = "5px";
label1.style.fontSize = "18px";
label1.style.color = "#555";
const input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "username");
input1.setAttribute("name", "username");
input1.setAttribute("placeholder", "Username or Email");
input1.style.width = "100%";
input1.style.padding = "10px";
input1.style.marginBottom = "15px";
input1.style.border = "1px solid #ccc";
input1.style.borderRadius = "4px";
input1.style.fontSize = "16px";
form.appendChild(input1);
const label2 = document.createElement("label");
label2.setAttribute("for", "password");
label2.innerText = "Password";
form.appendChild(label2);
label2.style.display = "block";
label2.style.marginBottom = "5px";
label2.style.fontSize = "18px";
label2.style.color = "#555";
const input2 = document.createElement("input");
input2.setAttribute("type", "password");
input2.setAttribute("name", "password");
input2.setAttribute("placeholder", "Password");
input2.setAttribute("id", "password");
input2.style.width = "100%";
input2.style.padding = "10px";
input2.style.marginBottom = "15px";
input2.style.border = "1px solid #ccc";
input2.style.borderRadius = "4px";
input2.style.fontSize = "16px";
form.appendChild(input2);
const div2 = document.createElement("div");
div2.style.display = "flex";
div2.style.alignItems = "center";
form.appendChild(div2);
const input3 = document.createElement("input");
input3.setAttribute("type", "checkbox");
input3.setAttribute("name", "keep-logged-in");
input3.setAttribute("id", "keep-logged-in");
input3.style.marginRight = "5px";
input3.style.marginBottom = "8px";
div2.appendChild(input3);
const label3 = document.createElement("label");
label3.setAttribute("for", "keep-logged-in");
label3.innerText = "Keep me logged in.";
div2.appendChild(label3);
label3.style.display = "block";
label3.style.marginBottom = "5px";
label3.style.fontSize = "18px";
label3.style.color = "#555";
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.innerText = "Log in";
button.style.width = "100%";
button.style.padding = "10px";
button.style.background = "#0096a5";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.fontSize = "20px";
button.style.cursor = "pointer";
buttonHover = () => {
  button.style.background = "#007a87";
};
button.addEventListener("mouseover", buttonHover);
buttonHoverOut = () => {
  button.style.background = "#0096a5";
};
button.addEventListener("mouseout", buttonHoverOut);
form.appendChild(button);
const div3 = document.createElement("div");
div3.classList.add("helper-links");
div3.style.marginTop = "10px";
div3.style.textAlign = "center";
div.appendChild(div3);
const forgetUserName = document.createElement("a");
forgetUserName.innerText = "Forget username?";
forgetUserName.style.display = "inline-block";
forgetUserName.style.margin = "5px";
forgetUserName.style.fontSize = "12px";
div3.appendChild(forgetUserName);
const forgetPassword = document.createElement("a");
forgetPassword.innerText = "Forget password?";
forgetPassword.style.display = "inline-block";
forgetPassword.style.margin = "5px";
forgetPassword.style.fontSize = "12px";
div3.appendChild(forgetPassword);
const loginProblem = document.createElement("a");
loginProblem.innerText = "Can't login?";
loginProblem.style.display = "inline-block";
loginProblem.style.margin = "5px";
loginProblem.style.fontSize = "12px";
div3.appendChild(loginProblem);
// logic
const adminName = "nurislam";
const adminPassword = "123456";
const info = input1.value;
console.log(input1);
