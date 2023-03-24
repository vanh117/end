// function up() {
//   let displayImage = document.getElementById("feature");
//   if ((x = 0)) {
//     document;
//   }
// }
let up = document.getElementById("up");
let displaImage = document.getElementById("feature");
let down = document.getElementById("down");

up.onclick = function () {
  displaImage.src = "back-arrow.png";
};

// let slideIndex = 0;
// const slideshow = document.getElementById("slideshow");
// const slides = slideshow.getElementsByTagName("img");
// const numSlides = slides.length;

// function showSlide() {
//   for (let i = 0; i < numSlides; i++) {
//     slides[i].style.opacity = "0";
//   }
//   slideIndex = (slideIndex + 1) % numSlides;
//   slides[slideIndex].style.opacity = "1";
// }

// setInterval(showSlide, 5000);
// up.onclick = function(){
//   for (let i = 0; i < numSlides; i++) {
//     slides[i].style.opacity = "0";
//   }
//   slideIndex = (slideIndex + 1) % numSlides;
//   slides[slideIndex].style.opacity = "1";
// }
const imageLinks = [
  "https://media.istockphoto.com/id/1222468026/photo/mother-son-walking-together-outdoors-holding-hands.jpg?s=612x612&w=0&k=20&c=hKwREYbAQb_Bue6kISkWk4l-HMeGsQ1u_en_3N874EU=",
  "https://thumbs.dreamstime.com/b/vector-woman-lady-girl-silhouette-developing-hair-female-body-holding-her-hands-back-meditation-calmness-happy-life-god-peace-244370022.jpg",
  "https://media.istockphoto.com/id/509933036/vector/silhouette-of-a-mother-holding-a-baby.jpg?s=612x612&w=0&k=20&c=3klsjnfzui292KfHMwKxHpouProSmg1NfJI2ueSCmT0=",
  "https://freesvg.org/img/Little-Girl-And-Butterfly-Silhouette.png",
  "me1.png",
];
up.onclick = function () {
  // Shuffle the array using Fisher-Yates shuffle algorithm
  for (let i = imageLinks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageLinks[i], imageLinks[j]] = [imageLinks[j], imageLinks[i]];
  }

  // Get the image container element
  const imageContainer = document.getElementById("image-container");

  // Clear the container
  imageContainer.innerHTML = "";
  imageLinks.forEach((link) => {
    const img = document.createElement("img");
    img.src = link;
    img.classList.add("imageLinks-img"); // Add the class to the image
    img.setAttribute("width", "400"); // Set the width attribute
    img.setAttribute("height", "100"); // Set the height attribute
    imageContainer.appendChild(img);
  });
  // Create an image element and set its src attribute to the first link in the shuffled array
  // const image = document.createElement("img");
  // image.src = imageLinks[0];

  // // Add the image element to the container
  // imageContainer.appendChild(image);
};
down.onclick = function () {
  // Shuffle the array using Fisher-Yates shuffle algorithm
  for (let i = imageLinks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageLinks[i], imageLinks[j]] = [imageLinks[j], imageLinks[i]];
  }

  // Get the image container element
  const imageContainer = document.getElementById("image-container");

  // Clear the container
  imageContainer.innerHTML = "";

  // Create an image element and set its src attribute to the first link in the shuffled array
  imageLinks.forEach((link) => {
    const img = document.createElement("img");
    img.src = link;
    img.classList.add("imageLinks-img"); // Add the class to the image
    img.setAttribute("width", "400"); // Set the width attribute
    img.setAttribute("height", "100"); // Set the height attribute
    imageContainer.appendChild(img);
  });

  // Add the image element to the container
  // imageContainer.appendChild(image);
};
