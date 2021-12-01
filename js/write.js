const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!form.title.value) {
    alert("제목을 입력하세요")
    form.title.focus()
  } else if (!form.content.value) {
    alert("내용을 입력하세요")
    form.content.focus()
  } else {
    alert("!")
  }
})
