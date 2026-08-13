
 const id = document.querySelector("#ids");
 const  name = document.querySelector("#name");
 const  role = document.querySelector("#role");
 const  nameInput = document.querySelector("#nameInput");
 const   button  = document.querySelector("button");





const user = [

    // { id :1,  name:"peter", role: "junior mernstack"},
    // { id :1,  name:"john", role: "junior fullstack"},
    // { id :1,  name:"gift", role: "junior fullstack"}
]

const input = nameInput.value

function pushin(input,user){

        const result =  user.push(input)

}
pushin(nameInput,user)

button.addEventListener("click", () => {
  pushin(nameInput, user);
});

 id. value = user[3]
 name.value = user[1]
 role.value = user[0]


// user.forEach((user1)=>{
//     let id = user1.id;
//     let name = user1.name;
//     let role = user1. role;

// role.value = role


//     console.log(id , name , role)
// })