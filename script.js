const popup = document.querySelector(".popup");
const cross = document.querySelector(".cross");

cross.addEventListener("click", ()=>{
    popup.style.bottom = "-300px";
})

setTimeout(()=>{
    popup.style.bottom = "20px";
}, 7000000)


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );