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

function getBoard() {
  board.innerHTML = posts
    .map(
      (post) =>
        `<tr>
          <td>${post.number}</td>
          <td>${post.title}</td>
          <td>${post.date}</td>
          <td>${post.user}</td>
        </tr>`
    )
    .join("")
}
