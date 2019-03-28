    $("a").on('click', function(event) {

      if (this.hash !== "") {
 
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      } 
    });
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      items:1,
      animateOut: 'fadeOut',
      lazyLoad:true,
      loop:true,
      margin:10
    });
    $("body").prognroll({
      height:5,       
      color:"#FFCD45"
    });

