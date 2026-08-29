// let cn=43;
// number=prompt("enter number");
// number=number.parseInt(number);
// if(cn!=number){
//     number=prompt("enter number");
//     number=number.parseInt(number);
// }
// console.log("you enterd number",number);
// let a=10,b=20,c=30,d=40,e=50;
// let n=5;
// const mean=(a,b,c,d,e)=>{
//     let res=(a+b+c+d+e)/n;
//     console.log("mean is",res);
// }
// mean(a,b,c,d,e);
let name1="harry";
let name2="   cherry      ";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));//4 character not included only 2to 3
// console.log(name.slice(2));// print string 2 th character to last character
// console.log(name.replace("Har","jar"));//"Har main string", jar is replacable string
//console.log(name1.concat()+name2+"Ok");
//console.log(name2.trim());
let fr="shivika";//start with 0
for(key in fr){
    console.log("string characters are "+fr[key]);
}
console.log(fr.charAt(2)); //first character print negative value not supported
console.log(fr.charCodeAt(0));// code of the character at a specified index in a string ASCII value
console.log(fr.codePointAt(0));//ASCII value
console.log(fr.at(-2));//k negative value supported and if value is negative start with right side with -1,-2
console.log(fr.at(2));//i 
console.log(fr[0]);//property access
let str = "Apple, Banana, Kiwi";
let part = str.substring(7);
console.log("part is",part);
let str1 = "Apple, Banana, Kiwi";
let part1 = str.substr(1);
console.log("part is",part1);
// let text = "Hello world!";
// let result = text.isWellFormed();
// console.log("result is",result);

// let text1 = "Hello world!";
// let result1 = text1.toWellFormed();
// console.log("result is",result1);

let text3 = "     Hello World!     ";
let text4 = text3.trimStart();
console.log("result trimStart is",text4);

let text5 = "     Hello World!     ";
let text6 = text5.trimEnd();
console.log("Length text5 = " + text5.length + "<br>Length text6 = " + text6.length)

let text = "5";
let padded = text.padStart(4,"0");
console.log("padded",padded);

let text7 = "5";
let padded1 = text7.padEnd(4,"0");
console.log("padded1",padded1);

let text9 = "Hello world!";
let result9 = text9.repeat(2);
console.log("result9",result9);