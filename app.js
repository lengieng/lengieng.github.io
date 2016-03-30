$(document).ready(function () {
    var today = new Date();
    var year = today.getFullYear();
    $("p#copyright").html("Copyright &copy; Lengieng's Portfolio " + year + ". All Rights Reserved.");
    if ($(window).width() <= 480) {
        // For phone, we don't need Scrollspy and smooth scrolling
        $("body").removeAttr("data-spy").removeAttr("data-target").removeAttr("data-offset");
    } else {
        // Add smooth scrolling
        $("#myNavbar a").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add # to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        });
    }
});