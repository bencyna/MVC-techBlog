async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const name = document.querySelector("#name-signup").value.trim();

  if (email && password && name) {
    if (password.length < 8) {
      alert("Password must be atleast 8 characters");
      return;
    }
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
      document.location.replace("/login");
    } else {
      alert("That email already exists");
    }
  }
}
document.querySelector("#signup").addEventListener("click", signupFormHandler);
