const left = document.getElementById("left-btn");
const right = document.getElementById("right-btn");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider-image");
const slideShowLinks = document.querySelectorAll(".projects__link");
const infoWrapper = document.getElementById("wrapper");
const descrBlock = document.querySelectorAll(".info__list");
const bottom = document.getElementById("bottom");

let currentSlideIndex: number = 0;
const paginationCircle: HTMLDivElement[] = [];

let linkIndex: Element[] = [];

function createPaginationCircle(): void {
  const div = <HTMLDivElement>document.createElement("div");
  div.className = "pagination-circle";
  if (bottom != null) {
    bottom.appendChild(div);
  }
  paginationCircle.push(div);
}

function showSlideLinks(): void {
  linkIndex = Object.values(slideShowLinks);
  linkIndex[0].classList.add("projects__link--active");
  linkIndex.forEach(
    (
      link: { addEventListener: (arg0: string, arg1: () => void) => void },
      index: number
    ) => {
      link.addEventListener("click", () => changeSlide(index));
    }
  );
}

function addPagination(): void {
  slides.forEach(createPaginationCircle);
  paginationCircle[0].classList.add("active");
  paginationCircle.forEach(
    (
      circle: { addEventListener: (arg0: string, arg1: () => void) => void },
      index: number
    ) => {
      circle.addEventListener("click", () => changeSlide(index));
    }
  );
}

function addActiveClass(): void {
  paginationCircle[currentSlideIndex].classList.add("active");
  linkIndex[currentSlideIndex].classList.add("projects__link--active");
}

function removeActiveClass(): void {
  paginationCircle[currentSlideIndex].classList.remove("active");
  linkIndex[currentSlideIndex].classList.remove("projects__link--active");
}

function showSlide(): void {
  slides[currentSlideIndex].classList.add("block");
  descrBlock[currentSlideIndex].classList.add("grid");
}

function hideslide(): void {
  slides[currentSlideIndex].classList.remove("block");
  descrBlock[currentSlideIndex].classList.remove("grid");
}

function changeSlide(slideIndex: number): void {
  hideslide();
  removeActiveClass();
  currentSlideIndex = slideIndex;
  addActiveClass();
  showSlide();
}

function nextSlide(): void {
  let newSlideIndex = currentSlideIndex + 1;

  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

function previousSlide(): void {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

addPagination();
showSlideLinks();
if (left != null) left.addEventListener("click", previousSlide);
if (right != null) right.addEventListener("click", nextSlide);
