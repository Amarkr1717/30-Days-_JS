// 7 .Object

//1. object creation and acess

//a. create an onject representing an book with properties like title, author and year.
 let book ={
    Title : "Concpet of Physics",
    Author : "HC Verma" ,
    year : 2007,

    //2.a. method 
    getDetails : function(){
        return `${this.Title} by ${this.Author}`
    } ,

    //method to update the book year
    setYear : function(year){
        this.year = year ;
    }
 };

 //console.log(book);

 //b.Access and log the title and author of book

 console.log(book.Author);
 console.log(book.Title);

 //2.Object method
 //a. Add a method to the book object and returns a string with the book's title and author.

 console.log(book.getDetails());

 //b. Add a method to the book object that takes a parameter (year) and updates the book year property.

 book.setYear(2010)
 console.log(book.year);

 //Nested object

 //a. create a nested object representing a library with properties like name and book{an array of book objects}

 let library = {
  name : "City Library" ,

  books: [
       {
        title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            year: 1997,

            getDetails: function(){
                return `${this.title} by ${this.author} in ${this.year}`
            }
       },

       {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        getDetails: function() {
            return `${this.title} by ${this.author}  in (${this.year})`;
        }
       },
  ]

 };

 library.books.forEach(book=>{
  console.log(book.getDetails());
 })

 //b. Access and log the name of the library and titles of all books in library.
 console.log(
    library.name
 );

 library.books.forEach(book=>{
    console.log(book.title);
   })

   //4. object iteration

   //a.use a for...in loop to iterate over the properties of book object and log to the console.

   let bookk ={
    Title : "Concpet of Physics",
    Author : "HC Verma" ,
    year : 2007,
   };
   for (let property in bookk){
    console.log(`${property} : ${bookk[property]}`);
   }

//b.use object.keys and object.values method to log all the keys and values of object.

let bookks ={
    Title : "Concpet of Physics",
    Author : "HC Verma" ,
    year : 2007,
   };

   console.log(
    "keys :" ,Object.keys(bookks)
   );

   console.log(
    "values :" ,Object.values(bookks)
   );