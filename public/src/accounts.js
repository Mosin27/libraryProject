function findAccountById(accounts, id) {
    const accnt = accounts.find((account) => account.id === id);
  return accnt;
}

function sortAccountsByLastName(accounts) {
  //accounts.name.last
  const lastNameSort = accounts.sort((accountA, accountB) => 
     accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return lastNameSort;
}

function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id;
  let total = 0;
    books.forEach(book => book.borrows.forEach(borrow => accountID === borrow.id && total++))
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessed = [];
  books.forEach(book => { 
    if (book.borrows.find(item => item.id === account.id && !item.returned)){
      possessed.push(book);
    }})
  possessed.forEach(book => { 
      let author = authors.find(auth => auth.id === book.authorId)
      book['author'] = author})
  return possessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
