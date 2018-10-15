// on écoute le clik sur les elements qui ont la classe nav-items
$('.nav-item').click(function() { 
    $('.nav-item').removeClass('active');
    $(this).addClass('active');  
});
       
