// const carousel = document.querySelector('.carousel');
// const carouselList = document.querySelector('.carousel-list');
// const sliderVisibleWidth = carousel.offsetWidth;
// const slider = carousel.querySelector('.carousel-listWrap');
// const items = carousel.querySelectorAll('.carouselItem');
// console.log(items);

// function getTotalItemsWidth(items) {
//     const { left } = items[0].getBoundingClientRect();
//     const { right } = items[items.length - 1].getBoundingClientRect();
//     return right - left;
//   }

//   getTotalItemsWidth(items);

// function carousel2(container) {
//     const slider = carousel.querySelector('.carousel-listWrap');
//     const items = carousel.querySelectorAll('.carouselItem');


//       console.log(items);
// }

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next"); 
const container = document.querySelector(".carousel-listWrap");

function 콜백함수(){
    console.log("a");
    container.style.transform = `translateX(-1000px)`;
}

function addEvent(){
  prevBtn.addEventListener('click', 콜백함수());
  nextBtn.addEventListener('click', 콜백함수());
};

// console.log(prevBtn.offsetWidth);

// container.style.transform = translateX(4000);

// container.style.transform = `translateX(${direction * (100 / 요소의 갯수)}%)`;

// console.log('ㅎㅇ!');

// document.write('안녕하세요!');