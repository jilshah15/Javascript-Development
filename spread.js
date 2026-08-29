const devices1 = ["Lamp-001", "Lamp-002"];
const devices2 = ["Lamp-003", "Lamp-004"];

const alldevices=[...devices1,...devices2];
console.log("alldevices:",alldevices);

const device = {
    name: "Lamp-001",
    status: "OFF"
};

const updateDevice={
    ...device,
    status:"ON"
}
const{name,status}=updateDevice;
console.log("name",name);
console.log("status",status);