
 const id = document.querySelector("#ids");
 const  name = document.querySelector("#name");
 const  role = document.querySelector("#role");
 const  nameInput = document.querySelector("#nameInput");
 const   button  = document.querySelector("#button1");





const user =[]




function pushin(user){

        const result =  user.push(nameInput.value);
alert(result)
        return result;
      
}


 button.addEventListener("click", () => {
  pushin(user);
});

// user.forEach((user1)=>{
//     let id = user1.id;
//     let name = user1.name;
//     let role = user1. role;

// role.value = role


//     console.log(id , name , role)
// })