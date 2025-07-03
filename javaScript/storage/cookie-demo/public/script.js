console.log("Hello, Cookie Demo!");

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  console.log("Username:", username, "Password:", password);
  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log("Response Data:", data);
  } catch (err) {
    console.log(err);
  }
});
const checklogin = async () => {
  try {
    const response = await fetch("/check-login");
    const data = await response.json();
    console.log("Login Check Data:", data);
    if (data.loggedIn) {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("welcomeSection").style.display = "block";
      document.getElementById(
        "userDiaplay"
      ).textContent = `Welcome, ${data.username}!`;
    } else {
      document.getElementById("loginSection").style.display = "block";
      document.getElementById("welcomeSection").style.display = "none";
      document.getElementById("userDiaplay").textContent = "";
    }
  } catch (err) {
    console.log("check-login error:");
  }
};
const logout = async () => {
  try {
    const response = await fetch("/logout");
    const data = await response.json();
    console.log("Logout Data:", data);
    checklogin(); // Refresh login status
  } catch (err) {
    console.log("Logout error:", err);
  }
};
document.addEventListener("DOMContentLoaded", checklogin());
const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", logout);

document.addEventListener("DOMContentLoaded", checklogin());
logoutButton.addEventListener("click", logout);

const startPollingLoginStatus = () => {
  checklogin(); // Immediate first check
  setInterval(checklogin, 1000); // Poll every 5 seconds
};
document.addEventListener("DOMContentLoaded", () => {
  startPollingLoginStatus();
});

// const setupWebSocket = () => {
//   const ws = new WebSocket("ws://localhost:1235"); // 替换为你的 WebSocket 地址

//   ws.addEventListener("open", () => {
//     console.log("WebSocket connection established");
//   });

//   ws.addEventListener("message", (event) => {
//     const message = JSON.parse(event.data);
//     if (message.type === "login") {
//       checklogin(); // 登录事件触发更新
//     } else if (message.type === "logout") {
//       checklogin(); // 登出事件触发更新
//     }
//   });

//   ws.addEventListener("close", () => {
//     console.log("WebSocket connection closed. Reconnecting...");
//     setTimeout(setupWebSocket, 3000); // 断开后自动重连
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   checklogin();
//   setupWebSocket(); // 启动 WebSocket 实时监听
// });
