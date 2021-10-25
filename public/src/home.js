function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let numberBorrowed = 0;
  books.forEach(book => {
    if (!book.borrows[0].returned) numberBorrowed++;
  })
  return numberBorrowed;
}

function getMostCommonGenres(books) {
  const array = [];
  const genres = books.map((book) => book.genre);
  genres.map((genre) => {
    const loc = array.findIndex((key) => key.name === genre);
    if (loc >= 0) {
      array[loc].count = array[loc].count + 1;
    } else {
      array.push({
        name: genre,
        count: 1
      });
    }
    });
  array.sort((a, b) => b.count - a.count);
  if (array.length > 5) {
    return array.slice(0, 5);
  }
  return array;
}


function getMostPopularBooks(books, count = 5) {
  const popular = books.map(book => ({name: book.title, count: book.borrows.length}));
  popular.sort((a, b) => b.count - a.count);
  return popular.slice(0, count);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) =>{
    let authorName ={
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id){
        authorName.count += book.borrows.length;
      }
    });
    result.push(authorName);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

  
 
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
