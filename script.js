const popup = document.querySelector(".popup");
const cross = document.querySelector(".cross");

cross.addEventListener("click", ()=>{
    popup.style.bottom = "-300px";
})

setTimeout(()=>{
    popup.style.bottom = "20px";
}, 7000)


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );

  
  window.addEventListener("scroll", function () {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (window.scrollY > 200) { // Adjust the scroll value as needed
        scrollButton.style.bottom = "40px";
    } else {
        scrollButton.style.bottom = "-50px";
    }
});