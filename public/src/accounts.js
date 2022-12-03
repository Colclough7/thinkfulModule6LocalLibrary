//findAccountById returns the account object when given a particular ID.
/*
1.findAccountById function has an arity of 2, with the parameters of accounts which is expected to be an array of objects and id which is a string.
2.using the higher array function find loop through the accounts array and find the first instance of the accounts id that equals the string id. 
*/
function findAccountById(accounts, id) {
  return accounts.find(account=>account.id === id)
}

// sortAccountsByLastName function returns the list of accounts ordered by last name.
/*
1.sortAccountsByLastName function has the arity of 1, and the parameter (accounts) is expected to be an array of objects.
2.loop through the array using sort convert all last names to lower case and compare first letter. This should return last names in abc order.
*/
function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b)=>a.name.last.toLowerCase() > b.name.last.toLowerCase()?1:-1)
 

}
//getTotalNumberOfBorrows function returns the number of times an account has created a 'borrow' record.
/*
1.getTotalNumberOfBorrows function has the arity of 2, and the parameters account is expected to be an array of objects and books which is expected to be a array of objects.
2.loop through the books array using the map higher array function,flaten out the 2D array using .flat(Infinity), and chain filter and return all borrow.id equal to the account.id.
3.return the arrays length
*/
function getTotalNumberOfBorrows(account, books) {
//   let totalNumberOfBorrows = 0
//   for (let i = 0; i < books.length; i++) {
//   for (let j = 0; j < books[i].borrows.length; j++) {
//    if (account.id === books[i].borrows[j].id) {
//     totalNumberOfBorrows++
//    }
//   }
//  }
//  return totalNumberOfBorrows
//refactored
return books.map(book=>book.borrows).flat(Infinity).filter(borrow=>borrow.id === account.id).length
}



// getBooksPossessedByAccount returns all of the books taken out by an account with the author embedded.
/*
1.getBooksPossessedByAccount function has the arity of 3, its is expecting 3 arrays with objects, accounts,books and authors.
2.declare an empty array variable (newBooks).
3.loop through the books array checking for the id in the borrows array.
4.push the new instance (book) into the newBook array.
5.loop through the books array finding the authors id that equals the book authorId.
6.assign book.auhtor to the newAuthors variable, through each iteration of newBooks
7.return newBooks
*/
function getBooksPossessedByAccount(account, books, authors) {
 let newBooks= []
  books.forEach(book => {
    let borrowedBooks = book.borrows;
    if (borrowedBooks.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      newBooks.push(book);
    }
  })
  newBooks.forEach(book=>{
    let newAuthor = authors.find(author => author.id === book.authorId);
    book.author = newAuthor;
  })

  return newBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
