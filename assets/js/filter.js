// console.log("Reached Here!!!!");
const deck = document.getElementById("deck");
const current_time = firebase.firestore.Timestamp.now()
document.getElementById("datepicker").valueAsDate = new Date();
listEvents();

function listEvents(){
  deck.innerHTML = "";
  db.collection('events').where('start','>=',firebase.firestore.Timestamp.fromDate(document.getElementById("datepicker").valueAsDate)).get().then((snapshot) => {
    snapshot.docs.forEach(element => {
      render(element);
    });
  })
//ADD ADMIN PORTAL
//   var tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 100);
// deck.innerHTML+=`<div class="col-12 col-md-6 col-lg-4 card-container filterDiv">
// <div class="card-flip border-0 mt-4">
// <div class="card front border-0">
// <img height = "260" class="card-img-top rounded" src="https://images.unsplash.com/photo-1578986568309-707ef1017f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="" loading="lazy">
// <div class="date-pos p-2 d-inline-block text-center rounded text-white position-absolute">${tomorrow.toDateString()}</div>
// <h5 class="font-weight-medium mt-3 card-title">Admin Events Portal<span class="lead"></span></h5>
// <p class="mt-3">Add new events here.</p>
// </div>

// <div class="card back border-0">
// <ul class="list-group list-group-flush">
//   <li class="list-group-item"><i class="fas fa-info-circle"></i> <a class="" href="https://ediprogsoc.co.uk/app" role="button">Access Portal</a></li>
//   <li class="list-group-item"><i class="fas fa-map-marked-alt"></i> </li>
//   <li class="list-group-item"><i class="fas fa-calendar-alt"></i> </li>
//   <li class="list-group-item"><i class="fas fa-clock"></i> </li>
// </ul>

// </div>

// </div>
// <div class = "btn-group">

// </div>
// </div>`

  
}

function render(doc){
  const event = doc.data();
  const date = event.start.toDate();
  deck.innerHTML += `<div class="col-12 col-md-6 col-lg-4 card-container filterDiv ${event.tag_names.reduce((tag1,tag2) => tag1 + ' ' + tag2)}">
  <div class="card-flip border-0 mt-4">
  <div class="card front border-0">
  <img height = "260" class="card-img-top rounded" src=${event.photo_url} alt="" loading="lazy">
  <div class="date-pos p-2 d-inline-block text-center rounded text-white position-absolute">${date.toDateString()}</div>
  <h5 class="font-weight-medium mt-3 card-title">${event.name} <span class="lead">${date.getFullYear()}</span></h5>
  <p class="mt-3">${event.summary}</p>
  </div>

  <div class="card back border-0">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-info-circle"></i>  ${event.description}</li>
    <li class="list-group-item"><i class="fas fa-map-marked-alt"></i>  ${event.location}</li>
    <li class="list-group-item"><i class="fas fa-calendar-alt"></i>  ${date.toLocaleDateString()}</li>
    <li class="list-group-item"><i class="fas fa-clock"></i>  ${date.toLocaleTimeString()}</li>
  </ul>

  </div>

  </div>
  <div class = "btn-group">
  ${(event.tag_names.map((name,idx) => {
    return `<p class = "mr-1"><button class="btn badge badge-pill badge-dark" style="background-color: ${event.tag_colors[idx]};" onclick="filterPill(${name})">${name}</button></p>`;
  })).join('')}
  </div>
  </div>`;
}