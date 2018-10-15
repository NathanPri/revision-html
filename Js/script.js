// on écoute le clik sur les elements qui ont la classe nav-items
$('.nav-item').click(function(event) { 
    $('.nav-item').removeClass('active');
    $(this).addClass('active');  
});


var MyTexteSecret = " Devenir Web developpeur et Expert Wordpress";



var myArray = MyTexteSecret.split("");

var timeloop;

function loop(){
    if(myArray.length > 0){
        document.getElementById("secretary_test").innerHTML += myArray.shift();
    }else{
        clearTimeout(timeloop);
    }

    timeloop = set setTimeout('loop()', 70);

}
loop();
