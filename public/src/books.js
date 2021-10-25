function findAuthorById(authors, id) {
  const authId = authors.find((author) => author.id === id);
  return authId;
}

function findBookById(books, id) {
  const bookId = books.find((book) => book.id === id);
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  const borrowed = books.filter((book2) => book2.borrows.some((borrow2) => borrow2.returned === false));
  const together = [[...borrowed], [...returned]];  //in this order because of the instructions!!!!
  return together
}

function getBorrowersForBook(book, accounts) {
    const borrows = [];
    const borrowsArray = book.borrows;
  borrowsArray.forEach(borrow =>{
    let account = accounts.find(acc => acc.id === borrow.id)
    let obj = account;
    obj['returned']= borrow.returned;
    borrows.push(obj);
  })
  return borrows.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
