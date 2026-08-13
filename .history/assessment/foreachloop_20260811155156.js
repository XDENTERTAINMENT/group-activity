
 const id = document.querySelector("#ids");
 const  name = document.querySelector("#name");
 const  role = document.querySelector("#role");
 const  nameInput = document.querySelector("#nameInput");
 const   button  = document.querySelector("#button1");





const user =[]


const rip = "someone died";
function pushin(user){

        const result =  user.push(nameInput.value);


 id. value = user[2]
 name.value = user[1]
 role.value = user[0]

 alert(user)

}


 button.addEventListener("click", (e) => {
    e.preventDefault();
  pushin(user);
});

// user.forEach((user1)=>{
//     let id = user1.id;
//     let name = user1.name;
//     let role = user1. role;

// role.value = role


//     console.log(id , name , role)
// })