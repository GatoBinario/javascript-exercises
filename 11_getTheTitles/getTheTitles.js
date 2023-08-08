const getTheTitles = function(books) {
    let booksTitles = [];
    for (let i = 0; i < books.length; i++) {
      booksTitles.push(books[i].title);
    }
    return booksTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
