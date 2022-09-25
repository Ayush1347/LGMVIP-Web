function createlist()
{  
   var todolist = document.getElementById("input").value;
   document.getElementById("tolist").insertAdjacentHTML("beforeend", `<div class="todolistcontainer">
   <input type="checkbox" class="checkbox" onclick="completelist(this)" id="checkbox">
    <p class="todotask">${todolist}</p>
    <i class="fa-sharp fa-solid fa-xmark crossicon" onclick="deletelist(this)"</i>
   </div>`);
}
function deletelist(e){
    e.closest(".todolistcontainer").remove();//find closest parent element with class todolistcontainer and remove it
}
function completelist(e){
    let container=e.closest(".todolistcontainer");
    
   if(e.checked){
       e.nextElementSibling.style.textDecoration = "line-through";
         e.nextElementSibling.style.color = "white";
         e.nextElementSibling.style.textDecorationColor = "black";
         container.style.backgroundColor="blue";
         container.style.color="white";
        

   }
   else{
         e.nextElementSibling.style.textDecoration = "none";
         e.nextElementSibling.style.color = "black";
         container.style.backgroundColor="white";
         checkbox.style.backgroundColor="red";

   }
}

window.addEventListener('load',function(){
    document.getElementById("buttontodo").addEventListener("click", createlist);
});