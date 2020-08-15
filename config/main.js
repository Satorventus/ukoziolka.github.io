
// window.addEventListener('load', msg); 


var topBtn = $('#topButton');

$(window).scroll(function(){
    if($(window).scrollTop() > 300)
        topBtn.addClass('show');
    else
        topBtn.removeClass('show');
    
});

topBtn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 300);
});