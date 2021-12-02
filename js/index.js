const posts = [
  {
    number: 1,
    title: "post1",
    date: "2021-12-01",
    user: "user1",
  },
  {
    number: 2,
    title: "post2",
    date: "2021-12-02",
    user: "user2",
  },
]

const board = document.querySelector("#board")

getBoard()

board.addEventListener("click", (e) => {
  if (e.target.tagName == "TD") {
    const link = e.target.parentNode.dataset.link
    location.href = link
  }
})

function getBoard() {
  board.innerHTML = posts
    .map(
      (post) =>
        `<tr data-link="/view.html?user=${post.user}&number=${post.number}">
          <td>${post.number}</td>
          <td>${post.title}</td>
          <td>${post.date}</td>
          <td>${post.user}</td>
        </tr>`
    )
    .join("")
}
