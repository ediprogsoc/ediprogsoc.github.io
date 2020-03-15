var prev_pos;

window.addEventListener("scroll", function() {


  curr_pos = document.body.getBoundingClientRect().top;
  if (curr_pos < prev_pos) {
    $('.navbar').fadeOut();
  }
  else if (curr_pos > prev_pos){
    $('.navbar').fadeIn();
  }
  prev_pos = curr_pos;
  });;
