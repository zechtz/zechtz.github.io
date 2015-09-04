jQuery(document).ready(function($) {
    moveToContainer();
    pushLinks();
    displayContentInModal();
});

function moveToContainer() {
    $('.nav a[href^="#"]').on('click', function(e) {
        $('a[href^="#"]').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop(true, true).animate({
            'scrollTop': $target.offset().top - 0
        }, 900, 'swing', function() {});});
}

function pushLinks() {
    if (history && history.pushState) {
        $('.nav a').click(function() {
            $.getScript(this.href);
            history.pushState({}, '', $(this).attr('href'));
        });
        return false
    }
}
function displayContentInModal(){
     $('a.partner-link').click(function(){
       var content = $(this).parent().html();
       console.log(content);
       var close = '<a class="close-reveal-modal">' + '&#215;' + '</a>';
       $('#myModal').html('');
       $(content).appendTo($("#myModal"));
       $(close).appendTo($('#myModal'));
    })
}

$(document).ready(function () {
	var trigger = $('a.nav-trigger');
	trigger.click(function(e){
		e.preventDefault();
		$(this).toggleClass('open').next('ul').toggleClass('open');
		$(this).find('>:first').toggleClass('fa-bars fa-close');
	});
});
/*-----------------------------------------------------------------------------------*/
/*  STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(document).ready(function(){
    $(".sticky").sticky({topSpacing:0});
});
})(jQuery);
