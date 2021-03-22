const goToPost = async (event) => {
  event.preventDefault();
  console.log("click working");

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    document.location.replace(`/post/${id}`);
  }
};

document.querySelector(".postLocate").addEventListener("click", goToPost);

document.querySelector("#dashBtn").addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/dashboard");
});
