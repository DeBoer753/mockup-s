// PASSWORD PROTECT: issues with banner disconnecting (html and classes deleted to avoid clutter)
// onOff = document.querySelector('#onOff')
// submit = document.querySelector('#submit')
// inputValue = document.querySelector('#inputValue')
// inputBox = document.querySelector('.inputBox')

// submit.addEventListener('click', () => {
//   if (inputValue.value === "cruz") {
//     onOff.style.display = "block"
//     inputBox.style.display = "none"
//     inputValue.style.display = "none" 
//   }
// })

// INTERACTIVE HAMBURGER ICON:
const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.anchorBox')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
})

// BANNER SLIDESHOW:
let slideShow = () => {
  let slider = document.querySelector(".slider"); // class
  let sliderWidth = slider.offsetWidth;
  let slideList = document.querySelector("#sliderBox");
  let count = 1;
  let items = slideList.querySelectorAll("li").length;
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  
  window.addEventListener('', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  let prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 10 + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  let nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 2000);
  
  };
  
  window.onload = function() {
  slideShow();  
  }

// SCROLL ON CLICK:
let homeLogo = document.querySelector('#homeLogo')
let homeSleepless = document.querySelector('#homeSleepless')
let mission = document.querySelector('#mission')
let services = document.querySelector('#services')
let team = document.querySelector('#team')
let photos = document.querySelector('#photos')
let contact = document.querySelector('#contact')

let scrollToBanner = document.querySelector('#scrollToBanner')
let scrollToHomeSleepless = document.querySelector('#scrollToHomeSleepless')
let scrollToMission = document.querySelector('#scrollToMission')
let scrollToServices = document.querySelector('#scrollToServices')
let scrollToTeam = document.querySelector('#scrollToTeam')
let scrollToPhotos = document.querySelector('#scrollToPhotos')
let scrollToContact = document.querySelector('#scrollToContact')

homeLogo.addEventListener('click', () => {
  scrollToBanner.scrollIntoView({behavior: 'smooth'})
  console.log('clicked');
})
homeSleepless.addEventListener('click', () => {
  scrollToBanner.scrollIntoView({behavior: 'smooth'})
  console.log('clicked');
})
mission.addEventListener('click', () => {
  scrollToMission.scrollIntoView({behavior: 'smooth'})
  console.log('clicked');
})

services.addEventListener('click', () => {
  scrollToServices.scrollIntoView({behavior: 'smooth'})
  console.log('clicked');
})

team.addEventListener('click', () => {
  scrollToTeam.scrollIntoView({behavior: 'smooth'})
})

contact.addEventListener('click', () => {
  scrollToContact.scrollIntoView({behavior: 'smooth'})
})

photos.addEventListener('click', () => {
  scrollToPhotos.scrollIntoView({behavior: 'smooth'})
})
