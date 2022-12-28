//Свайпер
new Swiper(".swiper", {
    breakpoints:{ //при адаптации слайдера
        320:{
          slidesPerView:1,
        },
        540:{
          slidesPerView:2,
        },
        1040:{
          slidesPerView:3,
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
  let drag_and_drop = ()=>{
    let zone = document.querySelectorAll('.zone')
    let children;
    let prevs;
    function dr_st() {
        prevs = this
        children = this.children   
    }
    function dr_ent() {    
    }
    function dr_ov(event) {
        event.preventDefault()
    }
    function dr_lv() {   
    }
    function dr_end() {  
    }
    function dr_op() {
        for (let item of children) {
            this.append(item)
        }
        let child;
        child = this.children
        for(let item2 of child){
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

modal1.onclick = ()=> {
    modal_win.classList.toggle('modal-push')
    window1.classList.toggle('rotate-modal')
    document.body.style.overflow = 'hidden'
}
cross.onclick = ()=> {
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

  md.onclick = ()=> {
    mw.classList.toggle('modal-push')
    window2.classList.toggle('rotate-modal')
    document.body.style.overflow = 'hidden'
    
}
cross2.onclick = ()=>{
    document.body.style.overflow = 'visible'
    mw.classList.remove('modal-push')
    window2.classList.remove('rotate-modal')
    
}

//таймер обратного отсчета
let dateEnd = new Date( '2023-01-04 00:00:00')
dateNow = new Date(),
date = Math.floor((dateEnd.getTime() - dateNow.getTime() ) / 1000)

function countdown() {
    let dateLeft = date,
    dateTemp = 0;
    dateTemp = Math.floor(dateLeft / (24 * 60 * 60))
    dateLeft -= dateTemp * 24 * 60 * 60;
    if(dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#days').innerHTML = dateTemp;

    dateTemp = Math.floor(dateLeft / (60 * 60));
    dateLeft -= dateTemp * 60 * 60;

    if(dateTemp < 10) dateTemp = "0" + dateTemp;
    document.querySelector('#hours').innerHTML = dateTemp

    dateTemp = Math.floor(dateLeft / 60);
    dateLeft -= dateTemp * 60 ;

    if(dateTemp < 10) dateTemp = "0" + dateTemp;
    document.querySelector('#minutes').innerHTML = dateTemp;

    if (dateLeft < 10) dateLeft = '0' + dateLeft;
    document.querySelector('#seconds').innerHTML = dateLeft

    date --;
}
setInterval(countdown , 1000)