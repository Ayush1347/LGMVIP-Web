let box = document.getElementById("cards");
let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data.map((element) => {
     return `
  <div class="card m-3 shadow bg-dark text-white">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.avatar}" class="img-fluid rounded-circle m-3" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element.first_name} ${element.last_name}</h5>
        <p class="card-text">${element.email}</p>
        <p class="card-text"><small class="text-muted">User ID: ${element.id}</small></p>
      </div>
    </div>
  </div>
</div>
  `;
})
   .join("");
   cards.innerHTML = info;
};


let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `
  <div class="text-center mt-3">
  <hr>
  <h1 class='load'>Getting Users Data....</h1>
  <hr>
  `;
  setTimeout(() => {
    API();
  }, 3000);
});