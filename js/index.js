// 이미지 슬라이드
let film = document.querySelector(".film");    
let pictures = film.getElementsByClassName("picture"); 

console.log(pictures.length);

let currentIndex = 1;         
let ImgCnt = pictures.length;
let time = 4500;            
let x = 1000;                  

setInterval( function(){
    console.log(currentIndex);
    let trans = currentIndex * x;

    film.style.transform = "translateX(-"+ trans +"px)";
    currentIndex++;

    if(currentIndex == ImgCnt){
        currentIndex = 0;
    }
}, time);

$(".mainmenu>li").mouseover(function(){
    $(this).find("ul").stop().slideDown(800);
}).mouseout(function(){
    $(this).find("ul").stop().slideUp(300);
})

