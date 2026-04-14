  const btn = document.getElementById("theme_toggle")
  const icon = btn.querySelector("i")
  const html = document.documentElement

  btn.addEventListener("click", () => {
    html.classList.toggle("dark")

    if(html.classList.contains("dark")){
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
    }
    else{
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    }
  })
