//first java program
console.log("first js hello program")



//sum of two number
let a=20,b=20;
let sum=a+b;
console.log("sum of two number:",a+b);



//check even or odd number
let num=20;
console.log("check even or odd num:",num%2===0?"even":"odd");



//find maximum of two number 
let x=3,y=5;
console.log("max of two num:",Math.max(x,y));



//swaping two number
let c=4,d=14;
[c,d]=[d,c];
console.log("swap of two num:",c,d);



//factorial number
function Factorial(n){
    return n===0?1:n*Factorial(n-1);
}
console.log("factorial number:",Factorial(4));



//fibonacii seriesor fibonacii sequence
function fibonacii(n){
    let s=[0,1];
    for(let i=2;i<n;i++){
        s[i]=s[i-1]+s[i-2]
    }
 return s;
}
console.log("this is fibnocii series",fibonacii(5))



//reverse string
let str="Surbhi";
console.log("reverse string:",str.split("").reverse().join(""))



//prime number
function isPrime(n){
    if(n<2)return false;
    for(let i=2;i<Math.sqrt(n);i++){
    if (n % i===0)return false;
    }
    return true;
}
console.log("is prime num or not:",isPrime(11));


//check palindrom
function isPalindrom(str){
return str===str.split("").reverse().join("");
}
console.log("is palindrom number",isPalindrom("surbhi"));


//array
let array=["surbhi",23,"software engineer"];
console.log("this is my arry:",array);

//largest value in array
let val=[33,15,16,71,18];
let largest=val[0];
for(let i=1;i<val.length;i++) {
if(val[i]>largest){
largest=val[i];
  }
}
console.log("largest value in array",largest);


//smallest value in array
let arayy=[10,20,15,8,2,8,9];
let smallest=arayy[0];
for(let j=1;j<arayy.length;j++){
    if(arayy[j]<smallest){
     smallest=arayy[j]
    }
}
console.log("smallest value in arry:",smallest)



//largest no.
let value=[4,5,9,7,3];
let max=value[0];
for(let num of array){
    if(num>max){
        max=value;
    }
}
console.log("largest num:",(max))


//smallest number
let vall=[4,5,2,7,3];
let min=vall[0];
for(let num of array){
    if(num<min){
        min=vall;
    }
}
console.log("smallest num:",(min))

//sum of array element
let arr=[1,2,3,4,5];
console.log("sum of array element:",arr.reduce((a,b)=>a+b,0));

//remove duplicate from array
let arrr=[4,6,5,4,7,6];
console.log("remove dublicate element:",[...new Set(arrr)]);


//reverse an array
let arrString="hello surbhi ";
console.log("reverse the array:",arrString.split("").reverse().join(""))

//reverse an array

// sort an array
 let arryy=[3,1,6,4]
 console.log("sorting the array",arryy.sort((a,b)=>a-b));

 // missing number in array
let A=[1,3,4];
let n=4;
console.log("missing number in array:",(n*(n+1))/2-A.reduce((a,b)=>a+b,0));

//let count occurance
let Arrrr=[1,2,2,3,4,4,4];
let count={};
Arrrr.forEach(num=>count[num]=(count[num]||0)+1);
console.log("number occurance how many time:",count);

//rotate array
let arrrrr=[2,4,6,7,8]
let k=1;
console.log(["rotate array",...arrrrr.slice(1),...arrrrr.slice(0,k)])

//check array equality
let arr1=[1,2,3,5];
let arr2=[1,2,3,5];
console.log("check array equality:",JSON.stringify(arr1)===JSON.stringify(arr2));

//string operation
//1-count vowel
let str1="bbb ";
console.log("count vowel:",str.match(/[a,e,i,o,u]/gi).length);

//2  covert string in uppercase
let str2=[]
    console.log("convert string in uppercase:",)


//3  convert string in lower case
let str3=[];
console.log("convert string in lowercase:",)


//4  find substring
let str4=[];
console.log("find substring:",)


//5  replace substring
let str5=[];
console.log("replace substring:",)


//6  check anagram
let str6=[];
console.log("check anagram:",)


//7  count words
let str7=[];
console.log("count words:",)


//8  reverse words in string
let str8 =[];
console.log("reverse word in string:",)
//9  remove whitespace
//10 character frequency 