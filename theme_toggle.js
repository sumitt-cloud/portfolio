document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeBtn")
  const html = document.documentElement

  btn.addEventListener("click", () => {
    html.classList.toggle("dark")
  })
})