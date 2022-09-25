const taskContainer = document.querySelector(".task__container");
let globalStore = [];

const generateNewCard = (formData) =>
  `
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-2">
      <div class="col-md-4 p-4" style="height:100%;">
        <img src="${formData.imageUrl}" onerror="this.src='img_101.png'" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-header">
          <div class="d-flex">
            <div class="p-2 w-100"> </div>
            <div class="p-2 flex-shrink-1">
              <button type="button" class="btn-close" id=${formData.id} onclick="deleteCard.apply(this, arguments)"> </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">${formData.fname}</h5>
          <p class="card-text">${formData.email}</p>
          <p class="card-text"><a href="${formData.website}" target="_blank">${formData.website}</a></p>
          <p class="card-text">${formData.gender}</p>
          <p class="card-text">${formData.skill}</p>
        </div>
      </div>
    </div>
  </div>
    `;

const loadInitialCardData = () =>{
  // Initial Storage to get the task card Data
  const getCardData = localStorage.getItem("unique__id__12345");

  // convert to normal object
  const {cards} = JSON.parse(getCardData);

  // loop over those array of task object to create HTML card, inject it to DOM
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

    // Update the globalStore
    globalStore.push(cardObject);
  })
};


// Delete Function

const deleteCard = (event) => {
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagname;

  globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
  localStorage.setItem("unique__id__12345", JSON.stringify({cards: globalStore}));

  if(tagname === "BUTTON") {
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode.parentNode);
  }
  else {
      return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
  }

}



const saveChanges = () => {

  // var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
  // for (var checkbox of markedCheckbox) {
  //   document.body.append(checkbox.value + ' ');
  // }
  const formData = {
    id: `${Date.now()}`,
    imageUrl: document.getElementById("image__url").value,
    fname: document.getElementById("f__name").value,
    email: document.getElementById("e__mail").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    skill: document.querySelector('input[name="skill"]:checked').value,
    website: document.getElementById("web__site").value
  };

    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(formData));

    globalStore.push(formData);
    localStorage.setItem("unique__id__12345", JSON.stringify({cards :globalStore}));

};