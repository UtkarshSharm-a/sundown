const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




var elema=document.querySelector(".elem-container")
var fixd=document.querySelector(".fixd-image")
elema.addEventListener("mouseenter",function(){
    fixd.style.display="block"
})
elema.addEventListener("mouseleave",function(){
    fixd.style.display="none"
})


var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixd.style.backgroundImage=`url(${image})`
    
    })
    
})



var a=document.querySelector(".a")
var b=document.querySelector(".b")
var c=document.querySelector(".c")
var img=document.querySelector(".img2")
var img1=document.querySelector(".img3")
var img3=document.querySelector(".img4")

a.addEventListener("mouseenter",function(){
     img.style.opacity=1
     a.style.color="red"
})
a.addEventListener("mouseleave",function(){
    img.style.opacity=0
    a.style.color="white"

})
b.addEventListener("mouseenter",function(){
    img1.style.opacity=1
    b.style.color="red"


})
b.addEventListener("mouseleave",function(){
    img1.style.opacity=0
    b.style.color="white"


})
c.addEventListener("mouseenter",function(){
    img3.style.opacity=1
    c.style.color="red"


})
c.addEventListener("mouseleave",function(){
    img3.style.opacity=0
    c.style.color="white"


})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1700,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





