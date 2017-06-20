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

// (function(){
// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [todo];
    var books = [
        {author: 'Robert Jordan', title: 'The Eye of the World',
            genre: ['Fantasy', 'Adventure'],
            available: true,
            dateAvailable: new Date(),
            rent: function () {
                if (this.available == true) {
                    this.available = false;
                    this.dateAvailable.setDate(this.dateAvailable.getDate()+14);

                } else {
                    alert('This book has already been rented.');
                }
            }, 
            return: function() {
                this.available = true;
                this.dateAvailable = 'now';
            } 
        },
        {author: 'Brandon Sanderson', title: 'The Well of Acsension',
            genre: ['Fantasy', 'Adventure', 'Strong Female Lead'],
            available: true,
            dateAvailable: new Date(),
            rent: function () {
                if (this.available == true) {
                    this.available = false;
                    this.dateAvailable.setDate(this.dateAvailable.getDate()+14);
    
                } else {
                    alert('This book has already been rented.');
                }
            },
            return: function() {
                this.available = true;
                this.dateAvailable = 'now';
            }    
        },
        {author: 'Brent Weeks', title: 'The Way of Shadows',
            genre: ['Dark Fantasy', 'Adventure'],
            available: true,
            dateAvailable: new Date(),
            rent: function () {
                if (this.available == true) {
                    this.available = false;
                    this.dateAvailable.setDate(this.dateAvailable.getDate()+14);
    
                } else {
                    alert('This book has already been rented.');
                }
            },
            return: function() {
                this.available = true;
                this.dateAvailable = 'now';
            }    
        },
        {author: 'Patrick Rothfuss', title: 'A Wise Man\'s Fear',
            genre: ['Fantasy', 'Adventure'],
            available: true,
            dateAvailable: new Date(),
            rent: function () {
                if (this.available == true) {
                    this.available = false;
                    this.dateAvailable.setDate(this.dateAvailable.getDate()+14);
    
                } else {
                    alert('This book has already been rented.');
                }

            },
            return: function() {
                this.available = true;
                this.dateAvailable = 'now';
            } 
        },
        {author: 'J.K. Rowling', title:'Harry Potter and the Sorcerer\'s Stone',
            genre: ['Fantasy', 'Adventure', 'Kids'],
            available: true,
            dateAvailable: new Date(),
            rent: function () {
                if (this.available == true) {
                    this.available = false;
                    this.dateAvailable.setDate(this.dateAvailable.getDate()+14);
    
                } else {
                    alert('This book has already been rented.');
                }
            },
            return: function() {
                this.available = true;
                this.dateAvailable = 'now';
            } 
        }
    ]
// log out the books array
    console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function(element,index,array) {
        console.log("Book #" + (index + 1));
        console.log("Title: " + element.title);
        console.log("Author: " + element.author);
        console.log("---");
    });
// end loop here
// Add a property “keywords” that contains an array of possibly genres the book may be categoriezed by
//     Add a boolean property “available” and set it to true
//     Add a dateAvailable property that has a string of the date/time when the book will be available
//     Add a method rent() that...
//         - changes the available property to false if it is not already false
//         - sets the dateAvailable to a date exactly two weeks from when the rent() method is called
//         (to do this, research the JS Date object and use methods from it in your code)
//     Add a method returned() that...
//         - changes the available property to true
//         - changes the dateAvailble property to the string “now”
// })();

(function() {
    //   The dog object should have properties for:
    //     breed (string),
    //     weightInPounds (number),
    //     age (number),
    //     color (string),
    //     steralized (boolean),
    //     shotRecords (array of objects with properties for date and typeOfShot)
    var dog = {
        breed: 'Golden Retriever',
        weightInPounds: 70,
        age: 5,
        color: 'golden',
        sterilized: false,
        shotRecords: [
            {date: '06/09/2016' ,typeOfShot: 'Rabies'}
        ],
        bark: function() {
            console.log('Woof!');
        },
        getOlder: function () {
            console.log(dog.age++);
        },
        fix: function () {
            console.log(dog.sterilized = true);
        },
        getShot: function () {
            var shotName = prompt('What shot was the dog given?');
            var shotDate = prompt('What date was the shot given on?');
            var newShotRecord = {date: shotName, typeOfShot: shotDate};
            dog.shotRecords.push(newShotRecord);
        }


    };

    // The dog object should have methods to:
    //     bark() - will console.log “Woof!”
    //     getOlder() - will increase age by 1
    //     fix() - will set sterile to true
    //     getShot() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

})();
