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

for (const book of myLibrary) {
  console.log(book.author)
  // Dynamic html goes here
}