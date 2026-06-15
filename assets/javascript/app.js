// CAROUSEL MANAGEMENT

const allSliders = document.querySelectorAll(".carousel-container");

function Caroussel(element) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let pageX;
  element.addEventListener("mousedown", (e) => {
    console.log("the mouse is down");
    isDown = true;
    element.classList.add("add");
    startX = e.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
    // console.log(e.pageX);
    // console.log(slider.offsetLeft);
    // console.log(startX);
  });

  element.addEventListener("mouseleave", (e) => {
    isDown = false;
    element.classList.remove("add");
  });

  element.addEventListener("mouseup", (e) => {
    isDown = false;
    element.classList.remove("add");
  });

  element.addEventListener("mousemove", (e) => {
    // Verification si l user clique de maniere continue sur le clic gauche de la souris
    if (!isDown) return;
    e.preventDefault();

    //Calcul de la nouvelle position du souris
    const x = e.pageX - element.offsetLeft;

    //calcul de la distance parcourue
    const walk = (x - startX) * 2;

    //Assignation de la valeur au scrollLeft
    element.scrollLeft = scrollLeft - walk;
  });
}

allSliders.forEach((slider) => {
  Caroussel(slider);
});

// CARD ITEM

// const cardItem = document.querySelectorAll(".card-item");
// console.log(cardItem);
// function hideOrNot() {
//   //application du toggle sur l'élément cliqué (valable dans les 2 cas)
//   this.classList.toggle("hidden");

//   // validation de l autre carte si c est suivant ou previous
//   const otherCard = this.nextElementSibling || this.previousElementSibling;

//   // application du toggle sur l autre element
//   otherCard?.classList.toggle("hidden");
//   console.log(cardItem);
//   console.log("It's working");
// }

// cardItem.forEach((card) => {
//   card.addEventListener("click", hideOrNot);
// });

const allCards = document.querySelectorAll(".school-card__inner");

allCards.forEach((card) => {
  card.addEventListener("click", () => {
    // .toggle() ajoute la classe si elle n'est pas là, et l'enlève si elle y est déjà
    card.classList.toggle("is-flipped");
  });
});
