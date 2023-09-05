const listOfBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'fiction',
    published: 1925,
    pages: 180
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'fiction',
    published: 1951,
    pages: 224
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'fiction',
    published: 1960,
    pages: 281
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'fiction',
    published: 1949,
    pages: 328
  },
 {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    genre: 'fiction',
    published: 1968,
    pages: 210
  },

];

const findLongestBookPublishedBefore = (year, books) => {
const filteredBooks = books.filter(book => book.published < 1960)
const longestBook = filteredBooks.reduce((maxbook, currentbook) => currentbook.pages > maxbook.pages ? currentbook : maxbook)
return { title: longestBook.title, author: longestBook.author }
}