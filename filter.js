const numbers = [10, 20, 30, 40, 50];
let res=numbers.filter(no => no > 30 );
// const result = numbers.filter(number => number > 30);
// console.log("res",res);

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
const deviceStatus=devices.filter(status=>status.status==="ON");
console.log("deviceStatus::",deviceStatus);