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
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})


let valueDisplays = document.querySelectorAll(".text_icons");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});