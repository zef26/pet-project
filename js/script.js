//Свайпер
new Swiper(".swiper", {
  breakpoints: { //при адаптации слайдера
    0: {
      slidesPerView: 1,
    },
    598: {
      slidesPerView: 2,
    },
    930: {
      slidesPerView: 3,
    }
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//Drag and drop
let drag_and_drop = () => {
  let zone = document.querySelectorAll('.zone')
  let children;
  let prevs;
  function dr_st() {
    prevs = this
    children = this.children
  }
  function dr_ent() {}
  function dr_ov(event) {
    event.preventDefault()
  }
  function dr_lv() {}
  function dr_end() {}
  function dr_op() {
    for (let item of children) {
      this.append(item)
    }
    let child;
    child = this.children
    for (let item2 of child) {
      prevs.append(item2)
    }
  }
  for (let item of zone) {
    item.addEventListener('dragstart', dr_st)
    item.addEventListener('dragenter', dr_ent)
    item.addEventListener('dragover', dr_ov)
    item.addEventListener('dragleave', dr_lv)
    item.addEventListener('dragend', dr_end)
    item.addEventListener('drop', dr_op)
  }
}
drag_and_drop()
//Якорь
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    burger.style.display = "none"
    document.body.style.overflow = "auto"
    bgc_mus.pause()
  })
}
// Модалка в  хидере
let modal1 = document.querySelector('.btn-modal-win')
let cross = document.querySelector('.cross')
let modal_win = document.querySelector('.modal-window')
let window1 = document.querySelector('.window')
let md = document.querySelector('.md2')
let mw = document.querySelector('.mw2')
let window2 = document.querySelector('.window2')
let cross2 = document.querySelector('.cross2')
modal1.onclick = () => {
  modal_win.classList.toggle('modal-push')
  window1.classList.toggle('rotate-modal')
  document.body.style.overflow = 'hidden'
}
cross.onclick = () => {
  modal_win.classList.remove('modal-push')
  window1.classList.remove('rotate-modal')
  document.body.style.overflow = 'visible'
  mw.classList.remove('modal-push')
  window2.classList.remove('rotate-modal')
}
//события с кнопкой
window.addEventListener("keydown", (event) => {
  if (event.key == 'Escape') {
    modal_win.classList.remove('modal-push')
    window1.classList.remove('rotate-modal')
    document.body.style.overflow = 'visible'
    mw.classList.remove('modal-push')
    window2.classList.remove('rotate-modal')
  }
}, true)
md.onclick = () => {
  mw.classList.toggle('modal-push')
  window2.classList.toggle('rotate-modal')
  document.body.style.overflow = 'hidden'
}
cross2.onclick = () => {
  document.body.style.overflow = 'visible'
  mw.classList.remove('modal-push')
  window2.classList.remove('rotate-modal')
}

//таймер обратного отсчета
function countdown() {
  if (date <= 0) {
    document.querySelector('#days').textContent = "00";
    document.querySelector('#hours').textContent = "00";
    document.querySelector('#minutes').textContent = "00";
    document.querySelector('#seconds').textContent = "00";
    return;
  }

  let days = Math.floor(date / (24 * 60 * 60));
  let hours = Math.floor((date % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((date % (60 * 60)) / 60);
  let seconds = date % 60;

  document.querySelector('#days').textContent = days.toString().padStart(2, '0');
  document.querySelector('#hours').textContent = hours.toString().padStart(2, '0');
  document.querySelector('#minutes').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('#seconds').textContent = seconds.toString().padStart(2, '0');

  date--;
}

setInterval(countdown, 1000);
countdown(); // сразу запустить
// Анимация кнопки подписаться 
let sub_btn = document.querySelector("footer button")
function sub_anim() {
  if (window.innerWidth < 650) {
    sub_btn.addEventListener("click", sub_click_mb)
  }
}
function sub_click_mb() {
  sub_btn.style.marginTop = "20px"
}
sub_anim()
// Бургер меню 
let mb_menu = document.querySelector(".mobile_menu")
let burger = document.querySelector(".burger")
let burger_menu = document.querySelector(".burger_menu")
let burger_video = document.querySelector(".burger video")
let burger_text = document.querySelectorAll(".burger_menu a")
let burger_back = document.querySelector(".mobile_menu_back")
const bgc_mus = document.querySelector("#bgc_music")
const btn_efc = document.querySelector("#btn_e1")
mb_menu.addEventListener("click", open_menu)
burger_back.addEventListener("click", back_menu)
function open_menu() {
  burger.style.opacity = "1"
  document.body.style.overflow = "hidden"
  burger.style.display = "block"
  burger_video.play()
  bgc_mus.play()
  bgc_mus.volume = 0.2
}
function back_menu() {
  burger.style.opacity = "0"
  setTimeout(() => {
    document.body.style.overflow = "auto"
    burger.style.display = "none"
  }, 1000);
  bgc_mus.pause()
}
function bgc_change() {
  btn_efc.play()
}
// Счётчик 
(function () {
  let counter = document.querySelectorAll('.counter');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function () {
    if (limit == counter.length) {
      return;
    }
    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top;
      let win = window.innerHeight - 40;
      if (pos < win && counter[i].dataset.stop === "0") {
        counter[i].dataset.stop = 1;
        let x = 0;
        limit++;
        let int = setInterval(function () {
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
})();
// Смена темы 
let theme_btn = document.querySelector("#theme_btn")
let theme_link = document.querySelector("#theme_link")
theme_btn.addEventListener("click", change)
function change() {
  let lightTheme = "style/theme.css";
  let darkTheme = "";
  var currTheme = theme_link.getAttribute("href");
  var theme = "";
  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
    burger_video.src = "./img/bgc.mp4"
  } else {
    currTheme = lightTheme;
    theme = "light";
    burger_video.src = "./img/bgc_light.mp4"
    console.log(burger_video.src);
  }
  theme_link.setAttribute("href", currTheme);
}
let kraska = document.querySelector("#kraska")
function kraska_mp3() {
  kraska.play()
}

