const booksArray = [];
let key = 0;

export const addBook = (book) => {
    let bookJson = book;
    key++;

    bookJson.key = key;
    booksArray.push(bookJson);

    console.log("Data book", booksArray)
}

export const listBooks = () => {
     return booksArray;
}