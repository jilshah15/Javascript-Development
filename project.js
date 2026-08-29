const Devices=[
    {
        name:"Lamp-001",
        status:"ON",
        temp:32
    },
    {
        name:"Lamp-002",
        status:"OFF",
        temp:29
    },
    {
        name:"Lamp-003",
        status:"ON",
        temp:38
    },
    {
        name:"Lamp-004",
        status:"OFF",
        temp:31
    }
];
console.log("devices",Devices);
const names=Devices.map(device=>device.name);
//console.log("Devices names are",names);
const deviceStatus=Devices.filter(device=>device.status==="ON")
//console.log("ON status Devices are:",deviceStatus);

const deviceONCount=deviceStatus.length;
console.log("deviceONCount",deviceONCount);

const onStatusDeviceNames=deviceStatus.map(device=>device.name);
//console.log("onStatusDeviceNames",onStatusDeviceNames);

const deviceStatusOff=Devices.filter(device=>device.status==="OFF")
console.log("OFF status Devices are:",deviceStatusOff);

console.log("deviceOFFCount total",deviceStatusOff.length);

const offStatusDeviceNames=deviceStatusOff.map(device=>device.name);
console.log("offStatusDeviceNames",offStatusDeviceNames);

const deviceCount=Devices.length;
console.log("total deviceCount",deviceCount);

const hightemp=Devices.filter(device=>device.temp>35)
console.log("hightemp",hightemp);

const hightempname=hightemp.map(device=>device.name);
console.log("hightempname",hightempname);

const searchName=Devices.find(device=>device.name==="Lamp-003");
console.log("searchName",searchName);
console.log("temp is",searchName.temp);

