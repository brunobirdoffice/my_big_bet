import xhr from "xhr";
import api from "./api";

const loginator = () => {
  const createBtn = document.querySelector(".btn-create"),
    loginBtn = document.querySelector(".btn-login");

  const sendCreationRequest = (username, password) => {
    xhr(
      {
        method: "POST",
        body: JSON.stringify({ "userName": username, "passWord": password}),
        uri: `${api().url}/users/post`,
        headers: {
          "Content-Type": "application/json"
        },
        "Access-Control-Allow-Origin": "*"
      },
      (err, resp, body) => {
        let data = JSON.parse(body);
        if (data.status == "ok") {
          window.location.href = `${window.location.href}dashboard.html`;
        } else {
          console.log("Creation error");
        }
      }
    );
  };
  const sendLoginRequest = (username, password) => {
    xhr(
      {
        method: "POST",
        body: JSON.stringify({ "userName": username, "passWord": password}),
        uri: `${api().url}/login`,
        headers: {
          "Content-Type": "application/json"
        }
      },
      (err, resp, body) => {
        let data = JSON.parse(body);
        if (data.status == "ok") {
          window.location.href = `${window.location.href}dashboard.html`;
        } else {
          console.log("Login error");
        }
      }
    );
  };

  createBtn.addEventListener("click", e => {
    e.preventDefault();
    let username = document.querySelector("#username-register").value,
      password = document.querySelector("#password-register").value;
    sendCreationRequest(username, password);
  });

  loginBtn.addEventListener("click", e => {
    e.preventDefault();
    let username = document.querySelector("#username-login").value,
      password = document.querySelector("#password-login").value;
    sendLoginRequest(username, password);
  });
};

export default loginator;
