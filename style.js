const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector(" " + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const burgerMenu = document.querySelector('.header__burger-btn')
const headerMenu = document.querySelector('.headerMenu')
burgerMenu.addEventListener('click',()=>{
  headerMenu.classList.toggle('block')
})


const typed =new Typed('.multiple-text',{
    strings:['Fronted Developer','UI/UX Design'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

})