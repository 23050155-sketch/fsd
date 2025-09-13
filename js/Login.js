document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      message.textContent = "Đăng nhập thành công!";
      message.style.color = "#34d399";
      message.style.textShadow = "0 0 10px #34d399";
      document.querySelector(".login-container").style.animation =
        "shake 0.1s ease";
      setTimeout(() => {
        window.location.href = "f.html";
      }, 1000);
    } else {
      message.textContent = "Tên người dùng hoặc mật khẩu không đúng!";
      message.style.color = "#f87171";
      message.style.textShadow = "0 0 10px #f87171";
    }
  });

const style = document.createElement("style");
style.innerHTML = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
