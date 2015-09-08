//Overlay navigation bar
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $('.phone-container i').toggleClass('khaki');
});
