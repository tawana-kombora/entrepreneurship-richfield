$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.header-nav').toggleClass('nav-toggle');
    })
    $(window).on('load scroll', function(){
        $('#menu').removeClass('fa-times');
        $('.header-nav').removeClass('nav-toggle');
    })
})