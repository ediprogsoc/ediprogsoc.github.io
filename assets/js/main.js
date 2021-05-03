//NAVBAR AND SCROLLING

var prev_pos;

window.addEventListener("scroll", function() {

  curr_pos = document.body.getBoundingClientRect().top;


  if (curr_pos < prev_pos-5) {
    $('.navbar').fadeOut(250);
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

const activate = (id) => {
  let id2 = id.replace('Name', '')
  let n = parseInt(id.match(/\d+/))
  let id3 = 'FB' + ((n % 2 == 0) ? (n-1).toString() : (n+1).toString()) + 'Name'
  let id4 = id3.replace('Name', '')
  document.getElementById(id).className = 'nav-link active'
  document.getElementById(id2).className = 'tab-pane active'
  document.getElementById(id3).className = 'nav-link'
  document.getElementById(id4).className = 'tab-pane'
}