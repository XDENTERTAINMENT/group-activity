
 const id = document.querySelector("#ids");
 const  name = document.querySelector("#name");
 const  role = document.querySelector("#role");




const user = [
    { id :1,  name:"peter", role: "junior fullstack"},
    { id :1,  name:"john", role: "junior fullstack"},
    { id :1,  name:"gift", role: "junior fullstack"}
]


 id.value = user.id;
 name.value = user.id;
 id.role = user.id;


user.forEach((user1)=>{
    let id = user1.id;
    let name = user1.name;
    let role = user1. role;



    console.log(id , name , role)
})