function toggleText() {
  const text = document.querySelector("#text");
  const btn = document.querySelector(".toggle-text-button");

  btn.addEventListener("click", () => {
    text.hasAttribute("hidden") ? (text.hidden = false) : (text.hidden = true);
  });
}
