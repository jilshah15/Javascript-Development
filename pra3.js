// const devices = [
//     "Lamp-001",
//     "Lamp-002",
//     "Lamp-003"
// ];
// const res=devices.map((key)=>{
//            return key + "online";
// })


// console.log("res::",res);
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

const devicename=devices.map(name=>name.name)
console.log("devicename::",devicename);
// const names=devices.map((name)=>{
//    return name.status;
// })

// const names1 = devices.map(device => device.name);

// console.log("names=>",names);

// devices.map(device => {
//     return <div>{device.name}</div>;
// });