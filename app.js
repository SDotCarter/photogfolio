let images = [];
let time = 5000;
let i = 0;

images[0] = "images/jasmine2.jpg";
images[1] = "images/Ariana.jpg";
images[2] = "images/mercedes2.jpg";
images[3] = "images/mitchell4.jpg";

let mainGallery = document.querySelector(".mainGallery");

// function gallery() {
//   images.forEach((photos, i) => {
//     setTimeout(() => {
//       mainGallery.src = gallery();
//     }, i * 5000);
//   });
// }

// function imgGal() {
//   mainGallery.src = gallery();
// }

/* "images/ariana.jpg",
  "images/mercedes2.jpg",
  "images/mitchell4.jpg",
  */

function changeImg() {
  document.mainGallery.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

// GALLERY/CARDS
window.onload = changeImg;

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // loops through each element with the class of panel
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.toggle("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    // loops through each element with the class of panel
    panel.classList.remove("active");
  });
}
