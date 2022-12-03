//getTotalBooksCount function returns the total number of books in the array
//getTotalBooksCount function returns zero if the array is empty
/*
1.getTotalBooksCount function has a arity of 1, the parameter (books) is excepted to be an array of objects.
2.getTotalBooksCount function returns expected arrays (books) .length (it return 0 if array is empty).

*/
function getTotalBooksCount(books) {
  return books.length
}


//getTotalAccountsCount returns the total number of accounts in the array
//getTotalAccountsCount returns zero if the array is empty
/*
1.getTotalAccountsCount function has a arity of 1, the parameter (accounts) is excepted to be an array of objects.
2.getTotalAccountsCount function returns expected arrays (accounts) .length (it return 0 if array is empty).
*/
function getTotalAccountsCount(accounts) {
  return accounts.length
}


//getBooksBorrowedCount function returns the total number of books that are currently borrowed
/*
1.getBooksBorrowedCount function has a arity of 1, the parameter (books) is excepted to be an array of objects.
sample data:
[{
  "id": "5f4471327864ee880caf5afc",
  "title": "reprehenderit quis laboris adipisicing et",
  "genre": "Poetry",
  "authorId": 20,
  "borrows": [
    {
      "id": "5f446f2e2a4fcd687493a775",
      "returned": false
    },
    {
      "id": "5f446f2ebe8314bcec531cc5",
      "returned": true
    },
    {
      "id": "5f446f2ea508b6a99c3e42c6",
      "returned": true
    }
  ]
}
]
2. declare a variable booksCheckedOut and assign its value to (excepted) parameter books which is an array of objects.
3.loop through that collection using the Higher-Order Function filter.
4.check to see if books key returned is falsey. This indicated the book(s) are still borrowed and not returned yet.
5.return the new array of books the are borrowed to the booksCheckedOut variable.
6.return booksCheckedOut length
*/
function getBooksBorrowedCount(books) {
  console.log(books)
 let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}


//getMostCommonGenres function returns an ordered list of most common genres
//getMostCommonGenres function limit the list to the top five genres
/*
1.getMostCommonGenres function has a arity of 1, the parameter (books) is excepted to be an array of objects.
2.declare a variable map that is a object literal.
3.loop through said array (books) and for each of the duplicate keys (genre) add one if the key is unique add the new key and add one.
4.return that Object entries [key,value] in a array that pairs them up.
5.map through the new array and sort them most frequent genre to least use genre
6.use the slice method to limit list to top five genres
*/
function getMostCommonGenres(books) {
  let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}


//getMostPopularBooks function returns an ordered list of most popular books
//getMostPopularBooks function limit the list to the top five popular books
/*
1.getMostPopularBooks function has a arity of 1, the parameter (books) is excepted to be an array of objects.
2.Looping through books array using higher array method map, map is returning a new array of objects,
with the keys name and count, the values of each will be name: book.title and count: book.borrows.length (returns a number)
3.I chained the  sort method on the map because I want the is order of most popular borrowed book (book.borrows.length) to least popular borrowed book.
4.use the slice method to limit list to top five most popular books
*/
function getMostPopularBooks(books) {
  console.log(books)
  return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5)
}


//getMostPopularAuthors function returns an ordered list of most popular authors
//getMostPopularAuthors function limit the list to the top five authors
/*
1.getMostPopularAuthors function has a arity of 2, the parameter (books) is excepted to be an array of objects. And the parameter (authors) is a array of objects with the keys id,name:first,:last.
2.declare a variable result as a empty array.
3.loop through the authors array using a forEach method,inside the loop decalare a varible newAuthor with the keys of name, and count. Set count to 0, and name has the value of authors.name.first and auhtor.name.last.
4.Inside the auhtors loop we will loop through the books array and set up a condtion, if book.authorId equals author.id, add the current newAuthor.count and the book.borrows.lenght (returns a number)
5.each iteration push into the results array
6.return the results array but sort it most popular author to least popular and the list no longer than 5
*/
function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let newAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    newAuthor.count += book.borrows.length;
   }
  });
  result.push(newAuthor);
 });
return result.sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
