$(document).ready(function() {

  makeRoundBubble();

  $(document).on("scroll",function(){
    if($(document).scrollTop()>600){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
      $("#bs-example-navbar-collapse-1").removeClass("our-navbar");
      $(".navbar-header").attr("style", "padding:0;");
      $("#logo-navbar").attr("style", "margin-top:0; width:225px;");
    } else{
      $("#bs-example-navbar-collapse-1").addClass("our-navbar");
      $(".navbar-header").removeAttr("style");
      $("#logo-navbar").removeAttr("style");
    }
  });

  $('.navbar-nav li a').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 80)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Outras Animações
  // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce
});

function makeRoundBubble(){
  minTop = Math.ceil(0);
  maxTop = Math.floor(250);

  var tamanho = [40, 50, 70, 75, 80, 85, 90, 95, 100, 115, 130, 150];

  for (var i = 1; i < 9; i++) {
    switchElements($('.bloc'+i), $('.bloc'+(Math.floor(Math.random() * 10)+1)));
  }

	for (var i = 1; i < 11; i++) {
		tam = tamanho[Math.floor(Math.random() * 11)];

		$(".bloc"+i).css("height", tam+"px");
		$(".bloc"+i).css("width", tam+"px");    
		$(".bloc"+i).css("marginTop", Math.floor(Math.random() * (maxTop - minTop)));
	}
}

function switchElements($ele1, $ele2){
	$ele1.after($ele2);
}
