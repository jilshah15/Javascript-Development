const devices = [
    "Lamp-001",
    "Lamp-002",
    "Lamp-003"
];

let result=devices.map((key)=>{
     return key +"online"
})
console.log(result);
// for(let i=0;i<=devices.length;i++){
//     result.push(devices[i] + " Online");
// }
// console.log(result);