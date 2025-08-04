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

addBook("The Lies of Lock Lamora", "Scott Lynch", 499, false)
addBook("The Martian", "Andy Weir", 369, false)
addBook("The Black Company", "Glen Cook", 319, false)




// Book Creation

const generateBook = function (book) {
  // Card
  const card = document.createElement("div")
  card.classList.add("card")
  card.setAttribute("data-id", book.id)
  cardContainer.appendChild(card)
  // Side margin
  const side = document.createElement("div")
  side.classList.add("side")
  card.appendChild(side)
  // Details
  const details = document.createElement("div")
  details.classList.add("details")
  card.appendChild(details)
  // Top half
  const topHalf = document.createElement("div")
  topHalf.classList.add("top-half")
  details.appendChild(topHalf)
  // Title
  const title = document.createElement("h2")
  title.classList.add("title")
  title.textContent = book.title
  topHalf.appendChild(title)
  // Author
  const author = document.createElement("p")
  author.classList.add("author")
  author.textContent = book.author
  topHalf.appendChild(author)
  // Pages
  const pages = document.createElement("p")
  pages.classList.add("pages")
  pages.textContent = "Pages: " + book.pages
  topHalf.appendChild(pages)
  // Read
  const read = document.createElement("div")
  read.classList.add("read")
  topHalf.appendChild(read)
  // Read text
  const text = document.createElement("p")
  text.classList.add("text")
  text.textContent = "Read: "
  read.appendChild(text)
  // Read stat
  const stat = document.createElement("p")
  stat.classList.add("stat")
  stat.textContent = book.read ? "Yes" : "No"
  book.read ? stat.classList.add("read-status") : stat.classList.add("unread-status")
  read.appendChild(stat)
  // Bottom half
  const bottomHalf = document.createElement("div")
  bottomHalf.classList.add("bottom-half")
  details.appendChild(bottomHalf)
  // Del button
  const delButton = document.createElement("span")
  delButton.classList.add("material-symbols-outlined")
  delButton.innerHTML = "delete"
  bottomHalf.appendChild(delButton)
}


const cardContainer = document.querySelector(".card-container")
for (const book of myLibrary) {
  generateBook(book)
}


// Make form visible
const bringUpForm = document.querySelector(".bring-up-form")
const form = document.querySelector("form")

bringUpForm.addEventListener("click", (e) => {
  form.classList.toggle("form-hidden")
  document.getElementById("title").focus()
})

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const checkedValue = document.querySelector('input[name="read"]:checked').value
  let read
  if (checkedValue === "yes") {
    read = true
  } else { read = false }


  addBook(title, author, pages, read)
  const lastBook = myLibrary[myLibrary.length - 1]
  generateBook(lastBook)
  form.classList.toggle("form-hidden")
  form.reset()
})

// Form cancel button
const cancelButton = document.querySelector(".cancel-button")
cancelButton.addEventListener("click", (e) => {
  e.preventDefault()
  form.reset()
  form.classList.toggle("form-hidden")
})

// Book deletion button
cardContainer.addEventListener("click", (e) => {
  let targetClass = e.target.classList.value
  if (targetClass === "material-symbols-outlined") {
    for (let i = 0; i < myLibrary.length; i++) {
      const card = e.target.closest(".card")
      const cardTitle = card.querySelector(".title").textContent
      if (myLibrary[i].title === cardTitle) {
        myLibrary.splice(i, 1)
      }
      card.remove()
    }
  }

  // Book change read status button
  if (e.target.classList.contains("stat")) {
    const card = e.target.closest(".card")
    const id = card.getAttribute("data-id")
    const book = myLibrary.find((book) => book.id === id)
    book.read = !book.read
    let stat = card.querySelector(".stat")
    if (book.read === true) {
      stat.textContent = "Yes"
      stat.classList.replace("unread-status", "read-status")
    } else {
      stat.textContent = "No"
      stat.classList.replace("read-status", "unread-status")
    }
  }
})




