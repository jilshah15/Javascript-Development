let devicename="iot device";
let deviceId="IOT001"
let isOnline=true;
let temperature=25;
console.log("devicename is",devicename);
console.log("deviceId is",deviceId);
console.log("isOnline is",isOnline);
console.log("temperature is",temperature);

let res=calculateSum(10, 20);
console.log("res",res);
function calculateSum(a,b){
    return 10+20;
}
let array=["Lamp-001", "Lamp-002", "Lamp-003", "Lamp-004"];
for(let i=0;i<=array.length-1;i++){
    console.log("i",array[i]);
}
const obj={
    name: "Lamp-001",
    status: "ON",
    temperature: 35
}
// console.log("name is"+obj.name +"status is"+obj.status);

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
console.log(devices[1].status);