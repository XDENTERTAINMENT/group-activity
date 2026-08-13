
 const id = document.querySelector("#ids");
 const  name = document.querySelector("#name");
 const  role = document.querySelector("#role");
 const  nameInput = document.querySelector("#nameInput");
 const   button  = document.querySelector("#button1");





const user =[]


const input = nameInput.value

function pushin(input,user){

        const result =  user.push(input);

        return result

}
pushin(input,user)





 button.addEventListener("click", () => {
  pushin(input, user);
});

// user.forEach((user1)=>{
//     let id = user1.id;
//     let name = user1.name;
//     let role = user1. role;

// role.value = role


//     console.log(id , name , role)
// })