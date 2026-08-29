// const compare=(a,b)=>{
// return b-a;
// }

// let marks=[2,145,1,246,654,234];
// marks.sort(compare);
// console.log("marks",marks);

// marks.sort(compare);
// let z=marks.reverse();
// console.log("z",z);
// console.log("marks",marks);

// let marks=[2,145,1,246,654,234,123,56,78];
// let b=marks.slice(2,7);
// console.log("b",b);


// let a=marks.splice(3,3,1021,1022,1023,1024);
// console.log("a",a);
// console.log("marks",marks);

// let marks=[10,40,20,30,100];
// marks.forEach((element)=>{
//     console.log(element*element);
// })
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// let name="JIL";
// let res=Array.from(name);
// console.log("res",res);

// let marks=[10,40,20,30,100];
// for(i of marks){
//     console.log("i=>",i);
// }
// for(i in marks){
//     console.log("i",marks[i]);
// }
//Map
let marks=[10,40,20,30,100];
marks.map((value,index,array)=>{
    console.log("value and index",value,index,array);
})
//Filter
//Map
let arrfil=[70,40,20,90,100];
let a2=arrfil.filter((value)=>{
   return value>20;
})
console.log("a2",a2);