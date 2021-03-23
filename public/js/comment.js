const newComment = async (event) => {
  event.preventDefault();

  console.log("hello");
  const content = document.querySelector("#comment-content").value.trim();
  const postId = event.target.getAttribute("data-id");

  console.log(content);
  console.log(postId);

  if (content) {
    const response = await fetch(`/api/posts/comments`, {
      method: "POST",
      body: JSON.stringify({ postId, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      location.reload();
    }
  }
};

document.querySelector("#dashBtn").addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/dashboard");
});

document.querySelector(".commentBtn").addEventListener("click", newComment);
