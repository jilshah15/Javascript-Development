// let marks=[45,23,78,87,65,78,true,"Not Present"];
// for(key in marks){
//     console.log(marks[key]);
// }
// console.log("array of marks length",marks.length);
// console.log("marks[0]",marks[0]);
// console.log("marks[1]",marks[1]);
// console.log("marks[2]",marks[2]);
// console.log("marks[3]",marks[3]);
// console.log("marks[4]",marks[4]);
// console.log("marks[5]",marks[5]);
// console.log("marks[6]",marks[6]);
// console.log("marks[7]",marks[7]);

// let marks=[45,23,78,87,65,78,true,"Not Present"];
// for(let i=0;i<marks.length-1;i++){
//     console.log(i+"marks are"+marks[i]);
// }
// for(let i=0;i<Object.keys(marks).length-1;i++){
//     console.log("marks are" +marks[Object.keys(marks)[i]]);
// }

let marks=[45,23,78,87,65,78];
let a=marks.toString();
console.log("a",a);
console.log(typeof(a));
// let b=marks.join("-");
// console.log("b",b);
let c=marks.pop();
console.log("c",c);
console.log("marks",marks);
let d=marks.push(80);
console.log("d",d);
console.log("marks",marks);
// let e=marks.shift();
// console.log("marks",marks);
let f=marks.unshift(10);
console.log("f",f);
console.log("marks",marks);

let marks1=[565,23,2,556,65,5];
console.log("marks1",marks1.sort())

let marks2=[55,53,68,97,85,98];
let marks3=[35,63,88,37,15,28];
let newArray=marks1.concat(marks2,marks3)
console.log("newArray",newArray)
// delete marks1[0];
// console.log("marks",marks1.length)