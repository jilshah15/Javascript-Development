const stud={
    "c":89,
    "c++":87,
    "dbms":80
};
// for(a in stud){
//     console.log(a + "marks are " +stud[a]);
// }

for(let i=0;i<Object.keys(stud).length;i++){
    console.log(Object.keys(stud)[i]+"marks are"+stud[Object.keys(stud)[i]]);
               
}