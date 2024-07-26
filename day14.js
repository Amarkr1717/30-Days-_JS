// //Day 14 : Classes

// //1.  class Defination
// //a. define a class person with properties name and age and a method to return a greeting message. Create an instance of the class and log 
// // the greeting message.
// class Person{
//     constructor(name , age){
//         this.name =name;
//         this.age = age;
//     }

//     getGreeting(){
//         return `Hello ! my name is ${this.name} and I'm ${this.age} years old `
//     }

//     updateAge(newAge){        //b.update new age
//         this.age = newAge ;
//         console.log(`updates age is ${this.age}`);
//     }

//     static getGenericGreeting() {
//         return "Hello, welcome to our application!";
//       }
// } 

// const person = new Person("Chai" ,20);
// console.log(
//     person.getGreeting()
// ); 
// person.updateAge(25);
// console.log(person.getGreeting());


// //2. class Inheritence
// //a. Define a class Student that extends the person class. Add a student ID property and a method to return the student Id.
// //create an instance of the student class and log the student Id.
// class Student extends Person{
//     constructor(name , age , student_Id){
//         super(name , age);
//         this.student_Id = student_Id ;
//     }
//     getStudentId(){
//         return `student Id : ${this.student_Id}`
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.student_Id}.`;//b. overRide the greeting method 
//       }
// }
 
// const student = new Student("chai" , 25 , 12345);
// console.log(student.getGreeting());
// console.log(student.getStudentId());
// console.log(Person.getGenericGreeting());//3.a

//3.static method and property.
//a . Add a static method to the person class that returns a generic greeting message. Call this static method without creating instance of 
//the class and log the message.

//b.add a static property to the student class to keep track of the number of student created. Increment this propert in the constructor
//and log the total number of students.

class Person{
    constructor(name ,age){
        this.name = name ;
        this.age = age ;
    }
    getGreeting(){
                 return `Hello ! my name is ${this.name} and I'm ${this.age} years old `
             }

             updateAge(newAge){        //b.update new age
                        this.age = newAge ;
                        console.log(`updates age is ${this.age}`);
                    }
                
                    static getGenericGreeting() {
                        return "Hello, welcome to our application!";
                      }         
}

class Student extends Person{
    static stuCount = 0;

    constructor(name , age , Student_Id){
        super(name , age);
        this.studentId = Student_Id;
        Student.stuCount += 1;
       // console.log(`total number of student is ${Student.stuCount}`);
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
      }
    
      getStudentId() {
        return `Student ID: ${this.studentId}`;
      }
    
      static getStudentCount() {
        return `Total number of students: ${Student.stuCount}`;
      }

}

console.log(Person.getGenericGreeting());

const student1 = new Student("Jane Doe", 20, "S123456");
console.log(student1.getGreeting());

const student2 = new Student("John Smith", 22, "S654321");
console.log(student2.getGreeting());

console.log(Student.getStudentCount());

//4 . Getters and Setters
//a.Add a getter method to Person class to return the full name(assume a firstname and lastname property).create a instance
//and log the full name using getter method.

//let solve it using another example.
class Boy {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    updateName(firstNewName , secondNewName){
        this.firstName = firstNewName;
        this.lastName = secondNewName;
    }
  }
  
  const boy = new Boy("John", "Doe");
  console.log(boy.fullName); // Logs "John Doe"

  boy.updateName("Chai" , "Code")
  console.log(boy.fullName);

  //b.add a setter method to Boy class to update the name property.update the name using setter and log the result.
