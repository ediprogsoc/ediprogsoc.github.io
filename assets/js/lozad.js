//Lozad.js
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//Tabs within cards
$('#bologna-list a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})