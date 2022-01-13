// Slider Form
var ArraySlideForm = Array.from(document.querySelectorAll(".wrap .slides")),
  SlideFormCount = ArraySlideForm.length,
  wrap = document.querySelector(".wrap"),
  formContent = document.querySelector(".form-content"),
  prevBtnForm = document.querySelector(".wrap .btn-prev"),
  nextBtnForm = document.querySelector(".wrap .btn-nxt"),
  firstForm = document.querySelector(".first-form"),
  firstSlide = document.querySelector(".first-slide"),
  secondSlide = document.querySelector(".third-form");
(step1 = document.querySelector(".circle span h1")),
  (step2 = document.querySelector(".circle span .h2")),
  (step3 = document.querySelector(".circle span .h3")),
  (count = 0),
  (circleColumn = document.querySelector(".container .circle span")),
  (footerLeft = document.querySelector(".footer .left a")),
  (leftSide = document.querySelector(".left-side")),
  (lastStep = document.querySelector(".circle .last-step")),
  (nextBtnMobil = document.querySelector(".nxtMobil")),
  (backBtnMobil = document.querySelector(".backMobil")),
  (lastStepMobile = document.querySelector(".last-step-Mobile")),
  (st1 = document.querySelector(".container .st1")),
  (st2 = document.querySelector(".container .st2")),
  (st3 = document.querySelector(".container .st3"));

nextBtnMobil.disabled = false;
nextBtnMobil.onclick = function () {
  count++;
  if (count == 1) {
    firstSlide.style.display = "block";
    firstForm.style.display = "none";
    backBtnMobil.disabled = false;
  } else if (count == 2) {
    firstSlide.style.display = "none";
    secondSlide.style.display = "block";
  } else if (count == 3) {
    secondSlide.style.display = "none";
    lastStepMobile.style.display = "block";
    nextBtnMobil.disabled = true;
  }
};

backBtnMobil.disabled = true;
backBtnMobil.onclick = function () {
  count--;
  if (count == 0) {
    backBtnMobil.disabled = true;
    firstForm.style.display = "block";
    firstSlide.style.display = "none";
  } else if (count == 1) {
    secondSlide.style.display = "none";
    firstSlide.style.display = "block";
  } else if (count == 2) {
    lastStepMobile.style.display = "none";
    secondSlide.style.display = "block";
  }
};

nextBtnForm.onclick = function () {
  count++;

  if (count == 1) {
    prevBtnForm.style.left = "-55px";
    document.querySelector(".form-content").style.width = "90%";
    step1.style.right = "-237px";
    step2.style.right = 0;
    firstForm.style.display = "none";
    firstSlide.style.display = "block";
    wrap.style.width = "668px";
    footerLeft.style.marginLeft = "244px";
  } else if (count == 2) {
    firstSlide.style.display = "none";
    secondSlide.style.display = "block";
    step2.style.right = "-237px";
    step3.style.right = 0;
    wrap.style.width = "421px";
    footerLeft.style.marginLeft = "45px";
  } else if (count == 3) {
    formContent.style.display = "none";
    document.querySelector(".left-side").style.display = "block";
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    lastStep.style.display = "block";
    circleColumn.style.top = "-50vh";
    circleColumn.style.width = "200vh";
    circleColumn.style.height = "200vh";
    circleColumn.style.right = "-35vh";
    lastStep.style.marginLeft = "270px";
    document.body.style.backgroundColor = "#Fbc7c3";
    document.querySelector(".stp1prim").style.display = "none";
  }
};

prevBtnForm.onclick = function () {
  count--;
  if (count == 0) {
    prevBtnForm.style.left = "-287px";
    step1.style.right = 0;
    footerLeft.style.marginLeft = "45px";
    step2.style.right = "-238px";
    wrap.style.width = "421px";
    firstForm.style.display = "block";
    firstSlide.style.display = "none";
  } else if (count == 1) {
    secondSlide.style.display = "none";
    firstSlide.style.display = "block";
    step3.style.right = "-238px";
    step2.style.right = "0";
    wrap.style.width = "668px";
    footerLeft.style.marginLeft = "244px";
  }
};

// Small slider Items
var imgsSlide = Array.from(document.querySelectorAll(".slide-img  img")),
  slidesCount = imgsSlide.length,
  currentSlide = 0,
  nxtButton = document.getElementById("next"),
  prevButton = document.getElementById("previous"),
  pagination = document.querySelector(".nav");
