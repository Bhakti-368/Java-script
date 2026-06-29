// console
// document 
    //  how to access element 
    //  how to print in a home Screen


    // how to Access Element Content

    // 1. innerHTML :
    console.log(document.querySelector('div').innerHTML);

    // 2. innerText
    console.log(document.querySelector('div').innerText);

    // 3. textContent
    console.log(document.querySelector('div').textContent);


    // How to Change HTML Content :
    // document.querySelector('h1').innerHTML = "New Content";
    // document.querySelector('h1').innerText = "New Content2";
    // document.querySelector('h1').textContent = "New Content3";

    document.querySelector('div').innerText = "Hello";