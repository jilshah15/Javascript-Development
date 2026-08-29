// async function getDevices(){
//   try{
//       const response=await fetch("https://jsonplaceholder.typicode.com/users");
//       const data= await response.json();
//       console.log("data",data);
//   }catch(error){
//        console.log("error",error);
//   }
// }
// getDevices();

async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    //console.log(users);
    const names=users.map(username=>username.name);
    //console.log("names",names);
    const city=users.filter(usercity=>usercity.address.city==="Howemouth");
    console.log("city",city);
 }

getUsers();










