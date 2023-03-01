require([
    'jquery'
], function($) {
    $(document).ready(function(){
        $("#scrollTop").hide();
        $(function scrollTop() {
          $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
              $('#scrollTop').fadeIn();
            } else {
              $('#scrollTop').fadeOut();
            }
          });
          $('#scrollTop').click(function () {
            $('body,html').animate({
              scrollTop: 0
            }, 1000);
            return false;
          });
        });
      });
});
