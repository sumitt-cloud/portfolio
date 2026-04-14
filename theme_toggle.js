const btn = document.getElementById("theme_toggle")

btn.addEventListener("click",() =>{
  document.documentElement.classList.toggle("dark")
})