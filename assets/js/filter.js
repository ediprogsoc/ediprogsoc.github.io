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
}

function render(doc){
  const event = doc.data();
  const date = event.start.toDate();
  deck.innerHTML += `<div class="col-12 col-md-6 col-lg-4 card-container filterDiv ${event.tags.reduce((tag1,tag2) => tag1.name + ' ' + tag2.name)}">
  <div class="card-flip border-0 mt-4">
  <div class="card front border-0">
  <img height = "260" class="card-img-top rounded" src=${event.photo_url} alt="" loading="lazy">
  <div class="date-pos p-2 d-inline-block text-center rounded text-white position-absolute">${date.toDateString()}</div>
  <h5 class="font-weight-medium mt-3 card-title">${event.name} <span class="lead">${date.getFullYear()}</span></h5>
  <p class="mt-3">${event.summary}</p>
  </div>

  <div class="card back border-0">
  <img height = "260" class="card-img-top rounded" src=${event.photo_url} alt="" loading="lazy">
  <div class="date-pos p-2 d-inline-block text-center rounded text-white position-absolute">${date.toDateString()}</div>
  <h5 class="font-weight-medium mt-3 card-title">${event.name} <span class="lead">${date.getFullYear()}</span></h5>
  <p class="mt-3">${event.summary}</p>
  </div>

  </div>
  <div class = "btn-group">
  ${(event.tags.map((tag) => {
    return `<p class = "mr-1"><button class="btn badge badge-pill badge-dark" style="background-color: ${tag.color};" onclick="filterPill(${tag.name})">${tag.name}</button></p>`;
  })).join('')}
  </div>
  </div>`;
}