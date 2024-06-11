const arrows = document.querySelectorAll(".arrow");
const arrow1 = document.querySelectorAll(".arrow-1");
const movieLists = document.querySelectorAll(".movie-list");
const movieLists1 = document.querySelectorAll(".movie-list-wrapper");

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio)>= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0 ;
    }
  });

});

arrow1.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 270);
let clickCounter = 0;
const imageItem = movieLists1[i].querySelectorAll("movie-list-wrapper").length;
arrow.addEventListener("click", function () {
  clickCounter++;
  console.log(imageItem);
  if (imageItem - (clickCounter) + (widthRatio)>= 0) {
    movieLists1[i].style.transform = `translateY(${
      movieLists1[i].computedStyleMap().get("transform")[0].x.value - 270
    }px)`;
  } else {
      movieLists1[i].style.transform = "translateY(0)";
      clickCounter = 0 ;
  }
});

});


/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.movie-list-container,.movie-list-container .movie-list-title,body,.toggle,.toggle-ball,.movie-item-img-1");

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
})
