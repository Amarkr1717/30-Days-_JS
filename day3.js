// DAY 3 - Control Structure

// 1. If -else statement

//(a). WAP to check if a number is positive , negative or zero , log the result to the console .

function checkNumber(a) {
    if(a>0){
        console.log("positive");
    }
    else if(a<0) console.log("negative");

    else {
        console.log("zero");
    }
}

checkNumber(7)
checkNumber(-2)
checkNumber(0)

//(b). WAP to check if a person is eligible to vote(>=18) ,console the result

function voteEg(b){
    if(b>=18){
        console.log("Eligible for voting");
    }
    else console.log("Not Eligible");
}

voteEg(21)
voteEg(7)

//2.switch case 

//(a). Wap that uses a switch case to determine day of the week based on (1-7)

var a;
a=6
 switch(a){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;    
    case 3:
        console.log("Wednesday");
        break;    
    case 4:
        console.log("Thursday");
        break;    
    case 5:
        console.log("Friday");
        break;    
    case 6:
        console.log("Saturday");
        break;    
    case 7:
        console.log("Sunday");
        break;    
    default:
        console.log("unvalid");
 }

 //(b).  Wap that uses a switch case to determine grade based on marks(A ,B ,C ,D ,E,F)
 function getGrade(score){
    let grade ;

    switch(true){
        case (score>90):
        grade = 'A';
        break;

        case (score>80):
        grade = 'B';
        break;

        case (score>70):
        grade = 'C';
        break;

        case (score>60):
        grade = 'D';
        break;

        default :
        grade = 'F'
    }

    return grade ;
 }

 const score = 91 ;
 const grade = getGrade(score);
 console.log(`The grade for a score of ${score} is ${grade}`);

 //Ternary Operator

 //(a). WAP that use a ternary operator to check number is even or odd

 function EvenorOdd(a){
    (a%2==0) ? console.log("Even"): console.log("Odd");
 }

 EvenorOdd(8)

 //WAP to check the condition of leap year.
 let year;
 function leapYear(year){
    if((year%4 == 0 && year %100 !=0)||(year % 400 ==0)) 
        return true;

     else 
     return false;
   
 }
const result = leapYear(2025);
console.log(result);
