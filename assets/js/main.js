//NAVBAR AND SCROLLING

var prev_pos;

window.addEventListener("scroll", function() {

  curr_pos = document.body.getBoundingClientRect().top;

  console.log(curr_pos, prev_pos);

  if (curr_pos < prev_pos-5) {
    $('.navbar').fadeOut(250);
  }

  else if (curr_pos > prev_pos+10){
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

//Membership buttons

    $(document).ready(function(){
        $(".collapse.show").each(function(){
        	$(this).prev(".btn").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".btn").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".btn").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });
