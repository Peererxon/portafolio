window.onload = function(){
    module();
}

function module(){
    let nav = document.getElementById("nav");
     
     (function(){
        console.log(nav.style.animationName="navbarON");
        console.log(nav.style.animation);
     })();
}