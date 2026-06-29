// Recursion Function
//1. Write a recursive function to generate Armstrong Number series up to n terms.

//function isArmstrong(num) {
//var digits = num.toString().length;

//function check(n, sum = 0) {
//if (n === 0) {
// return sum === num;
// }

//var digit = n % 10;
// return check(
// Math.floor(n / 10),
// sum + Math.pow(digit, digits)
//);
//}

// return check(num);
//}

//function armstrongSeries(n, current = 0, count = 0) {
//if (count === n) {
//return;
//}

//if (isArmstrong(current)) {
//console.log(current);
//armstrongSeries(n, current + 1, count + 1);
// } else {
//armstrongSeries(n, current + 1, count);
//}
//}

//armstrongSeries(10);






// Arrow Function 
//1. Create a tax calculator with slab logic via functions.
// Arrow Function for Tax Calculation

//const calculateTax = (income) => {
    //let tax = 0;

    //if (income <= 250000) {
        //tax = 0;
    //} 
    //else if (income <= 500000) {
        //tax = (income - 250000) * 0.05;
    //} 
    //else if (income <= 1000000) {
       // tax = (250000 * 0.05) + (income - 500000) * 0.20;
    //} 
    //else {
        //tax = (250000 * 0.05) +
              //(500000 * 0.20) +
              //(income - 1000000) * 0.30;
    //}

    //return tax;
//};

//var income = 1200000;
//console.log("Income:", income);
//console.log("Tax:", calculateTax(income));





//Expression Function 

//1. Build a modular billing system using functions.
// Function Expression

//const calculateAmount = function(price, quantity) {
   // return price * quantity;
//};

//const calculateGST = function(amount) {
    //return amount * 0.18; // 18% GST
//};
//const generateBill = function(price, quantity) {
    //let amount = calculateAmount(price, quantity);
    //let gst = calculateGST(amount);
    //let total = amount + gst;

   // console.log("Amount :", amount);
   // console.log("GST (18%) :", gst);
   // console.log("Total Bill :", total);
//};
// Example
//generateBill(500, 2);


//2. Check if a number is Perfect using function.
// Function Expression

//const isPerfect = function(num) {
   // let sum = 0;

    //for (let i = 1; i < num; i++) {
        //if (num % i === 0) {
            //sum += i;
       // }
   // }

    //if (sum === num) {
        //console.log(num + " is a Perfect Number");
    //} else {
        //console.log(num + " is Not a Perfect Number");
   // }
//};

// Example
//isPerfect(28);







//IIFE Function : 
//1. Write a function to validate a 6-digit OTP.
// IIFE Function

//(function(otp) {

   // if (/^\d{6}$/.test(otp)) {
        //console.log("Valid 6-Digit OTP");
    //} else {
        //console.log("Invalid OTP");
    //}

//})("123456");
