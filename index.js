"use strict";

const readMore = document.querySelector(".read-more");
const moreInfo = document.querySelector(".more-info");
const readmorepop = document.querySelector(".read-more-pop");

readMore.addEventListener("click", function () {
  moreInfo.classList.toggle("active");

  if (moreInfo.classList.contains("active")) {
    readMore.textContent = "წაიკითხე ნაკლები...";
  } else {
    readMore.textContent = "წაიკითხე მეტი...";
  }
});

//------- SELECTING ELEMENTS -----//

const exit = document.querySelectorAll(".fa-x");
const content = document.querySelectorAll(".show");
const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");

// -- Selecting SHOW CONTENT --//

const showkakheti = document.querySelector(".show-kakheti");
const showkartli = document.querySelector(".show-kartli");
const showracha = document.querySelector(".show-racha");
const showimereti = document.querySelector(".show-imereti");
const showadjara = document.querySelector(".show-adjara");
const showapkhazeti = document.querySelector(".show-apkhazeti");
const showsamegrelo = document.querySelector(".show-samegrelo");
const showsvaneti = document.querySelector(".show-svaneti");
const showjavakheti = document.querySelector(".show-javakheti");
const architectP = document.querySelector(".architect-p");
const literatureP = document.querySelector(".literature-p");
const showarchitect = document.querySelector(".show-architect");
const showliterature = document.querySelector(".show-literature");
const showculture = document.querySelectorAll(".show-culture");
const readmorecontent = document.querySelector(".read-more-content");

//--Selecting OVERLAY--//

const overlay = document.querySelector(".overlay");
const overlay1 = document.querySelector(".overlay1");

//--Selectin REGIONS--//

const kakheti = document.querySelector(".kakheti");
const kartli = document.querySelector(".kartli");
const racha = document.querySelector(".racha");
const samcxeJavakheti = document.querySelector(".samcxe-javakheti");
const imereti = document.querySelector(".imereti");
const samegrelo = document.querySelector(".samegrelo");
const svaneti = document.querySelector(".svaneti");
const adjara = document.querySelector(".adjara");
const apkhazeti = document.querySelector(".apkhazeti");

//---Event Listeners---//

//--Closing Content loop--//

for (let x of exit) {
  x.addEventListener("click", function () {
    overlay.style.display = "none";
    overlay1.style.display = "none";
    for (let i of content) {
      i.style.display = "none";
    }

    dropdown.style.left = "150%";

    for (let i of showculture) {
      i.style.display = "none";
    }

    readmorecontent.style.display = "none";
  });
}

//--Showing Content--//

kakheti.addEventListener("click", function () {
  showkakheti.style.display = "block";
  overlay.style.display = "block";
});

kartli.addEventListener("click", function () {
  showkartli.style.display = "block";
  overlay.style.display = "block";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.style.display === "block") {
    overlay.style.display = "none";

    for (let i of content) {
      i.style.display = "none";
    }
  }
});

racha.addEventListener("click", function () {
  showracha.style.display = "block";
  overlay.style.display = "block";
});

samcxeJavakheti.addEventListener("click", function () {
  showjavakheti.style.display = "block";
  overlay.style.display = "block";
});

architectP.addEventListener("click", function () {
  overlay1.style.display = "block";
  showarchitect.style.display = "block";
});

literatureP.addEventListener("click", function () {
  overlay1.style.display = "block";
  showliterature.style.display = "block";
});

readmorepop.addEventListener("click", function () {
  overlay.style.display = "block";
  readmorecontent.style.display = "flex";
});

burger.addEventListener("click", function () {
  dropdown.style.left = "50%";
});

//--SCROL REVEAL--//

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1500,
  delay: 400,
});

ScrollReveal().reveal(
  ".second-main,.kakheti,.kartli,.guria,.racha,.svaneti,.samegrelo,.samcxe-javakheti,.apkhazeti,.racha,.imereti,.adjara,.first-section h1,.country-info",
  {
    delay: 500,
    origin: "left",
  }
);

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1500,
  delay: 400,
});

ScrollReveal().reveal(".culture-info", {
  delay: 500,
  origin: "bottom",
});
