async function getData(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users1");
    const data=await response.json();
    //console.log("data",data);
    const userName=data.map(userName=>userName.name);
    //console.log("userName List::",userName);
    const userNameFilter=data.filter(user=>user.name.toLowerCase().includes("s"));
    console.log("userNameFilter List::",userNameFilter);
    }
    catch(error){
              console.log("Failed to Load users",error);
    }
}
getData();