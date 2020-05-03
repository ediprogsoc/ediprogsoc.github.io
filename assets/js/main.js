var prev_pos;

window.addEventListener("scroll", function() {

  curr_pos = document.body.getBoundingClientRect().top;

  console.log(curr_pos, prev_pos);

  if (curr_pos < prev_pos) {
    $('.navbar').fadeOut();
  }

  else if (curr_pos > prev_pos){
    $('.navbar').show();
  }

  if (curr_pos >= 0) {
    curr_pos = 0;
  }

  if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $('.navbar').hide();
    }

  prev_pos = curr_pos;

  });
