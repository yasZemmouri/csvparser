"use strict;"
const myFormEl = document.getElementById('myForm');
const csvFile = document.getElementById('csvFile');

myFormEl.addEventListener('submit', function (e) {
    e.preventDefault();
    // what is this???
    const input = csvFile.files[0];
    console.log(input);
    // FileReader is a class we create an instance of it so we can use its method readAsText()
    const reader = new FileReader();
    reader.onload = function (e) {
        // What's target??
        console.log('reader loaded');
        const text = e.target.result;
        console.log(e.target.result);//the csv content as string
        // What does write do? 
        document.write(text);

    }
    console.log('hello');
})