const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("hello");
  const title = document.querySelector("#post-name").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  console.log(title + content);

  if (title && content) {
    const response = await fetch(`/api/posts/dashboard`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("script working");
    } else {
      alert("kys");
    }
  }
};

document.querySelector(".postBtn").addEventListener("click", newFormHandler);
document
  .querySelector("#homepageBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("homebutton");
    document.location.replace("/");
  });
