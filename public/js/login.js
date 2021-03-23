const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(email + password);
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(response);

      document.location.replace("/");
    } else {
      alert("Username or password incorrect, please try again");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document.querySelector("#loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/login");
});
