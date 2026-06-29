
let books = [];
let id = 1;

function addBook() {

    const bookName = prompt("Enter Book Name");
    const author = prompt("Enter Author Name");
    const category = prompt("Enter Category");
    const quantity = Number(prompt("Enter Quantity"));

    if (bookName == "" || author == "" || category == "" || quantity == "") {
        alert("Please Enter All Details");
        return;
    }

    const book = {
        id: id++,
        bookName: bookName,
        author: author,
        category: category,
        quantity: quantity
    };

    books.push(book);

    displayBooks();
}


function displayBooks(list = books) {

    let output = "";

    for (const book of list) {

        let status;

        if (book.quantity > 0) {
            status = "Available";
        } else {
            status = "Out of Stock";
        }

        output += `
        <hr>
        <h3>Book ID : ${book.id}</h3>
        <p>Book Name : ${book.bookName}</p>
        <p>Author : ${book.author}</p>
        <p>Category : ${book.category}</p>
        <p>Quantity : ${book.quantity}</p>
        <p>Status : ${status}</p>

        <button onclick="issueBook(${book.id})">Issue</button>
        <button onclick="returnBook(${book.id})">Return</button>
        <button onclick="deleteBook(${book.id})">Delete</button>
        `;
    }

    document.getElementById("output").innerHTML = output;
    document.getElementById("count").innerHTML = books.length;
}


function searchBook() {

    const search = prompt("Enter Book Name, Author or Category");

    const result = books.filter(book =>
        book.bookName.includes(search) ||
        book.author.includes(search) ||
        book.category.includes(search)
    );

    displayBooks(result);
}


function issueBook(bookId) {

    const book = books.find(b => b.id == bookId);

    if (book) {

        if (book.quantity > 0) {
            book.quantity--;
        } else {
            alert("Book Out Of Stock");
        }

        displayBooks();
    }
}


function returnBook(bookId) {

    const book = books.find(b => b.id == bookId);

    if (book) {
        book.quantity++;
    }

    displayBooks();
}

function deleteBook(bookId) {

    books = books.filter(book => book.id != bookId);

    displayBooks();
}