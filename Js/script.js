// on écoute le clik sur les elements qui ont la classe nav-items
$('.nav-item').click(function() { 
    console.log(this);
    $(this).addClass('active');  
});
       
