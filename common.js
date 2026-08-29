// const devices = [
//     {
//         name: "Lamp-001",
//         status: "ON"
//     },
//     {
//         name: "Lamp-002",
//         status: "OFF"
//     },
//     {
//         name: "Lamp-003",
//         status: "ON"
//     },
//     {
//         name: "Lamp-004",
//         status: "OFF"
//     }
// ];
// // const res=devices.filter(device=>device.status==="ON");
// // console.log("res",res);

// // const names=devices.map(name=>name.name);
// // console.log("names:",names);

// const res=devices
// .map(device=>device.status==="ON")
// .filter(name=>name.name)
// console.log("res",res);
const numbers = [1, 2, 3, 4, 5];
const res=numbers.map(no=>no)
console.log("res",res);

const numbers1 = [10, 25, 30, 45, 50];
const result=numbers1.filter(no=>no>30);
console.log("result",result);

const devices = [
    { id: 1, name: "Lamp-001" },
    { id: 2, name: "Lamp-002" },
    { id: 3, name: "Lamp-003" }
];
const result1=devices.find(device=>device.id===2);
console.log("result1",result1);

const devicesDetails = [
    { name: "Lamp-001", status: "ON" },
    { name: "Lamp-002", status: "OFF" },
    { name: "Lamp-003", status: "ON" }
];
const names=devicesDetails.map(dname=>dname.name);
console.log("names",names);
const status=devicesDetails.filter(dstatus=>dstatus.status==="ON");
console.log("status",status);
const ans=status.map(name=>name.name);
console.log("ans",ans);