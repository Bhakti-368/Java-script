//### Task 1: Student Information System
let student = {
    rollNo: 101,
    name: "Bhakti",
    course: "BBA IT",
    marks: 85
};

// 1. Display all student details
console.log("Student Details:", student);

// 2. Update the marks
student.marks = 90;

// 3. Add a new property grade
student.grade = "A";

// 4. Delete the course property
delete student.course;

console.log("Updated Student:", student);







//#### Task 2: E-Commerce Product
// Create Product Object
let product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    stock: 20,

    // Method to display all product information
    productInfo: function () {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Category:", this.category);
    }
};

// 1. Display product details
console.log("Product Details:", product);

// 2. Change the price
product.price = 55000;

// 3. Add a property category
product.category = "Electronics";

// 4. Remove the stock property
delete product.stock;

// 5. Display all product information using method
product.productInfo();





//## Task 3: Employee Management
// Create Employee Object
let employee = {
    empId: 201,
    empName: "Bhakti",
    department: "IT",
    salary: 50000,

    // Method to display employee information
    showDetails: function () {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
        console.log("Salary:", this.salary);
        console.log("Experience:", this.experience);
    }
};

// 1. Display employee details
console.log("Employee Details:", employee);

// 2. Increase salary by 10%
employee.salary = employee.salary + (employee.salary * 10 / 100);

// 3. Add a property experience
employee.experience = "3 Years";

// 4. Delete the department property
delete employee.department;

// 5. Display employee information using method
employee.showDetails();








//## Task 4: Bank Account
// Create Account Object
let account = {
    accountNumber: 123456789,
    holderName: "Bhakti",
    balance: 20000,

    // Method to display current balance
    checkBalance: function () {
        console.log("Current Balance: ₹" + this.balance);
    }
};

// 1. Display account details
console.log("Account Details:", account);

// 2. Deposit ₹5000 into the balance
account.balance += 5000;

// 3. Add a property accountType
account.accountType = "Savings";

// 4. Delete the accountType property
delete account.accountType;

// 5. Display current balance
account.checkBalance();






//### Task 5: Movie Booking System
let movie = {
    movieName: "Avengers: cocktail 2",
    ticketPrice: 350,
    availableSeats: 50,
    theatreName: "cinepolice Cinema",

    // Method to display complete movie information
    movieInfo: function () {
        console.log("Movie Name:", this.movieName);
        console.log("Ticket Price: ₹" + this.ticketPrice);
        console.log("Available Seats:", this.availableSeats);
        console.log("Show Time:", this.showTime);
    }
};

// 1. Display movie details
console.log("Movie Details:", movie);

// 2. Update the ticket price
movie.ticketPrice = 350;

// 3. Add a property showTime
movie.showTime = "10:00 PM";

// 4. Delete the theatreName property
delete movie.theatreName;

// 5. Display complete movie information
movie.movieInfo();