let a=10; //number
let b="hi";//string
let c=true;//boolean
let d=null; //NULL
let e; //undefined

let isOnline=true;
if(isOnline){
  console.log("device is online")
}
else{
  console.log("device is offline")
}
sayHello();
function sayHello(){
    console.log("Hello");
}

function greet(name){
  console.log("hi"+name);
}
greet("jil");
greet("jisha");

let p=10;
let q=20;

function sum(p,q){
    return p+q;
}
let res=sum(p,q);
console.log("res",res);

let x=[10,20,30,40,50];
for(let i=0;i<=x.length-1;i++){
    console.log(x[i]);
}
// console.log("x[0]",x[0]);
// console.log("x[1]",x[1]);
// console.log("x[2]",x[2]);
// console.log("x[3]",x[3]);
// console.log("x[4]",x[4]);

const obj={
    name:"jil",
    education:"MSCIT",
    city:"Dhansura"
}
console.log(obj.name);

const devices = [
    {
        name: "Lamp-001",
        status: "ON"
    },
    {
        name: "Lamp-002",
        status: "OFF"
    },
    {
        name: "Lamp-003",
        status: "ON"
    }
];
console.log("devices[0].name",devices[0].name);
console.log("devices[1].name",devices[1].name);
console.log("devices[2].name",devices[2].name);