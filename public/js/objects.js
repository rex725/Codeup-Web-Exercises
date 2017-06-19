(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = {
        firstName: 'David',
        lastName: 'Jex',
    };

    person.sayHello = console.log('Hello from ' + person.firstName + ' ' + person.lastName + '.');


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to 
     *more than $200. Write a JS program, using conditionals, that logs 
     *to the browser, how much does Ryan, Cameron and George need to pay. 
     *We know that Cameron bought $180, Ryan $250 and George $320. Your 
     *program will have to display a line with the name of the person, 
     *the amount before the discount, the discount, if any, and the amount 
     *after the discount.
     *
     * Uncomment the lines below to create an array of objects where each 
     *object represents one shopper. Use a foreach loop to iterate 
     *through the array, and console.log the relevant messages for each 
     *person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}

        
    ];
    shoppers.forEach(function (element, index, array) {

        if (element.amount > 200) {
            console.log(element.name + ' paid, ' + element.amount + ' and received a discount of 10% bringing their total to ' + (element.amount-(element.amount * .10)));
        } else {
            console.log(element.name + ' paid, ' + element.amount + ' which was not enough to reveive the discount.');
        }
    });


})();

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    console.log("Book #" + todo);
    console.log("Title: " + todo);
    console.log("Author: " + todo);
    console.log("---");
// end loop here
