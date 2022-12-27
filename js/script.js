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
    let block = document.querySelector('#el')
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
//[p]