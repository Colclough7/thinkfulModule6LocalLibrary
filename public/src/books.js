//findAuthorById function returns the author object when given a particular ID.
/*
1.findAuthorById function has a arity of 2, the parameters authors which expected to be an array of objects with the keys id,name:first,:last, and a string (id).
2.loop through auhtors array with the find higher order function to find the first instance of the authors.id that equals the id parameter.
*/
function findAuthorById(authors, id) {
  return authors.find(author=>author.id === id)
}


//findBookById function returns the book object when given a particular ID.
/*
1.findBookById function has the arity of 2, the parameters books which is expected to be an array of objects and id which is a string.
2.loop through the books array with the higher order function find to find the first instance of the books.id that equals the string (id).
*/
function findBookById(books, id) {
 
  return books.find(book=>book.id === id)
}

//partitionBooksByBorrowedStatus function returns an array with two arrays: borrowed books and returned books.
/*
1.partitionBooksByBorrowedStatus function has the arity of 1, the parameter books is expected to be an array of objects.
2.declare a variable booksReturned and assign the books array and loop through the array using the higher order function filter, return every books.borrows returned value that equals true.
3.declare a variable booksBorrowed and assign the books array and loop through the array using the higher order function filter, return some of the books.borrows returned value that equals false.
4.declare a variable partitionBooksArray and assign it to an empty array.
5.spread both booksReturned and booksBorrowed into the 2D array partitionBooksArray.
6.return partitionBooksArray.
*/
function partitionBooksByBorrowedStatus(books) {
   let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true))
   
   let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false))
 let partitionBooksArray = [[...booksBorrowed], [...booksReturned]]
 return partitionBooksArray
}



//getBorrowersForBook function returns an array for a book of all borrowers with their information and return status.
//getBorrowersForBook function should limit the list to ten borrowers.
/*
1.getBorrowersForBook function has the arity of 2, the parameter book is an array of objects and accounts which are also an array of objects with the keys id,picture,age,name,company,email,registered.
2.use dot notation for the book.borrows key and loop through the array values using a higher order function map.
3.declare a variable account and assign the parameter accounts, loop through the array to find the account id that equals the book.borrows id.
4.spread the looped values {...borrow,...account} in object that is returned
5.limit the list (array) to the first 10 borrowers using the slice method. 
*/
function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id)
   return { ...borrow, ...account }
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
