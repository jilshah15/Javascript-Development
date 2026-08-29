const devices = [
    {
        id: 1,
        name: "Lamp-001"
    },
    {
        id: 2,
        name: "Lamp-002"
    },
    {
        id: 3,
        name: "Lamp-003"
    }
];
const res=devices.find(ids=>ids.id===2);
console.log("res",res);