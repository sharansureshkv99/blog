
document.getElementById('menu').addEventListener('click', function () {
    
    document.getElementById('menu').classList.toggle('is-active');
    
        document.getElementById('header').classList.toggle('header');
        document.getElementById('nav').classList.toggle('nav');
        document.getElementById('scroll').classList.toggle('scroll');


   
   
});

function quotes(){
    document.getElementById('quotes').style.display = "flex";
    document.getElementById('article').style.display = "none";
    document.getElementById('border').style.left = "0px";

  


}
function article(){
    document.getElementById('quotes').style.display = "none";
    document.getElementById('article').style.display = "flex";
    document.getElementById('border').style.left = "94px";


}
