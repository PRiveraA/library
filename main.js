const myLibrary = []

const Book = function (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = crypto.randomUUID()
}

const addBook = function (title, author, pages, read) {
  let book = new Book(title, author, pages, read)
  myLibrary.push(book)
}

Object.setPrototypeOf(addBook, Book.prototype)

addBook("The Lies of Lock Lamora", "Scott Lynch", 499, "no")
addBook("The Martian", "Andy Weir", 369, "no")
addBook("The Black Company", "Glen Cook", 319, "no")




// Book Creation
const cardContainer = document.querySelector(".card-container")
for (const book of myLibrary) {
  console.log(book)
  // Card
  const card = document.createElement("div")
  card.classList.add("card")
  cardContainer.appendChild(card)
  // Side margin
  const side = document.createElement("div")
  side.classList.add("side")
  card.appendChild(side)
  // Details
  const details = document.createElement("div")
  details.classList.add("details")
  card.appendChild(details)
  // Title
  const title = document.createElement("h2")
  title.classList.add("title")
  title.textContent = book.title
  details.appendChild(title)
  // Author
  const author = document.createElement("p")
  author.classList.add("author")
  author.textContent = book.author
  details.appendChild(author)
  // Pages
  const pages = document.createElement("p")
  pages.classList.add("pages")
  pages.textContent = "Pages: " + book.pages
  details.appendChild(pages)
  // Read
  const read = document.createElement("div")
  read.classList.add("read")
  details.appendChild(read)
  // Read text
  const text = document.createElement("p")
  text.classList.add("text")
  text.textContent = "Read: "
  read.appendChild(text)
  // Read stat
  const stat = document.createElement("p")
  stat.classList.add("stat")
  stat.textContent = book.read
  read.appendChild(stat)
}



const addBookButton = document.querySelector(".add-book")

addBookButton.addEventListener("click", (e) => {
  const form = document.querySelector("form")
  let formComputedStyle = window.getComputedStyle(form)
  let formDisplay = formComputedStyle.display

  if (formDisplay === "none") {
    form.setAttribute("style", "display: flex;")
  }
})