// Day 4 - Loops

//1 . For Loop
//(a). WAP to print number from 1 to 10 using loop

for(let i = 1; i<=10; i++){
    console.log(i);
}

//(b). WAP to print multiplication table of 5.
let n =10;
for(let i=1; i<=n; i++ ){
    let j = i*5;
    console.log(j);
   
}

//2. While loop

//(a).WAP to calculate the sum of number from 1 to 10 using a while loop

function SumofTen(){
    let sum = 0;
    let i = 1;

    while(i<=10){
        sum += i ;
        i++;
    }

    return sum;
}

let result = SumofTen();
console.log(`sum : ${result}`);

//(b).WAP to print number from 10 to 1 using while

let i = 10;
while (i>=1){
    console.log(i);
    i--;
}

//3. Do While loop

//(a). WAP to print number from 1 to 5 using while loop

let j = 1;

do{
  console.log(j);
  j++;
} 

while(j<=5)

//(b). WAP to calculate the factorial of a number


function factorialCal(n){
    let k = 1;
    let i = n;
    do{
       k *= i ;
       i--;
    }

    while(i>=1);

    return k;
}

let Fact = factorialCal(4);
console.log(`factorial :${Fact}`);


//4 . WAP to print the pattern

for(let i= 0; i<5 ;i++){
    let pattern = '';
    for(let j =0;j<=i ;j++){
        pattern += '* ';
    }
    console.log(pattern);
}

//5.Loop coontrol

//Wap to print number from 1 to 10 , but skip the number using continue

for(let i = 1;i<=10 ; i++){
    if(i==5) continue ;
    console.log(i);
    
}

 console.log("\n");
//Wap to print number from 1 to 10 ,but stop the loop when the number is 7 using break statement

for(let i = 1;i<=10 ; i++){
    if(i==7) break ;
    console.log(i);
    
}
   
    

