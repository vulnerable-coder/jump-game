score=0;
cross=true;
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
if(e.keyCode==38)
{
    apoo =document.querySelector('.apoo');
    apoo.classList.add('animateapoo');
    setTimeout(() =>{
        apoo.classList.remove('animateapoo')
    },700);
}
if(e.keyCode==39)
{
    apoo = document.querySelector('.apoo');
    apoox = parseInt(window.getComputedStyle(apoo,null).getPropertyValue('left'));
apoo.style.left = apoox+112+"px";
}
if(e.keyCode==37)
{
    apoo = document.querySelector('.apoo');
    apoox = parseInt(window.getComputedStyle(apoo,null).getPropertyValue('left'));
apoo.style.left = (apoox-112)+"px";
}}
setInterval(() => {
    apoo = document.querySelector('.apoo');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    ax=parseInt(window.getComputedStyle(apoo,null).getPropertyValue('left'));
    ay=parseInt(window.getComputedStyle(apoo,null).getPropertyValue('bottom')); 
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom')); 
    offsetX = Math.abs(ax-ox);
    offsetY = Math.abs(ay-oy);
    //console.log(offsetX,offsetY);
    if(offsetX<93 && offsetY<52){
        
gameOver.style.visibility='visible';
obstacle.classList.remove('obstacleani');
}
else if(offsetX<145&&cross)
{
    score+=1;
    updateScore(score);
    cross=false;
    setTimeout(() => {
        cross=true;
    }, 1000);
    setTimeout(() => {
        anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newdur = anidur-0.05;
    obstacle.style.animationDuration=newdur+'s';
    console.log('new duration',newdur);
    }, 1000);
}
}, 100);
function updateScore(score){
    scoreCont.innerHTML = "Your Score: "+score
}