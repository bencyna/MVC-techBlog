const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-name").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  console.log(title + content);

  if (title && content) {
    const response = await fetch(`/api/users/dashboard`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
    }
  }
};

document.querySelector(".postBtn").addEventListener("click", newFormHandler);
