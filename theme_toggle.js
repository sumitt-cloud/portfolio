const btn = document.getElementById("theme_toggle");

if (btn) {
  const icon = btn.querySelector("i");
  const html = document.documentElement;

  // Load saved theme or system theme
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  btn.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      localStorage.setItem("theme", "light");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  });
}