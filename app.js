const gallery = document.querySelector(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightboxImage");
const closeBtn = document.querySelector(".closeBtn");
let nextPhoto = 0;

gallery.addEventListener("click", function (event) {
  const clickedPhoto = event.target.src;

  if (clickedPhoto) {
    nextPhoto = Array.from(gallery.children).indexOf(
      event.target.parentElement
    );
    console.log(nextPhoto);
    lightboxImage.src = clickedPhoto;
    lightbox.classList.add("active");
  }
});

// CLOSE BUTTON
closeBtn.addEventListener("click", function () {
  lightbox.classList.remove("active");
});

// CLOSE WHEN CLICKING ANYWHERE
lightbox.addEventListener("click", function (event) {
  lightbox.classList.remove("active");
});

// CLOSE WITH ESC KEY AND GO LEFT/RIGHT WITH ARROW KEYS
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && lightbox.classList.contains("active")) {
    // console.log("ESCAPE");
    lightbox.classList.remove("active");
  }

  if (event.key === "ArrowRight" && lightbox.classList.contains("active")) {
    // console.log("RIGHT");
    if (nextPhoto >= gallery.children.length - 1) {
      nextPhoto = 0;
    } else {
      nextPhoto++;
    }
    lightboxImage.src = gallery.children[nextPhoto].children[0].src; // Example logic to go to the next image
  }

  if (event.key === "ArrowLeft" && lightbox.classList.contains("active")) {
    // console.log("LEFT");
    if (nextPhoto <= [0]) {
      nextPhoto = [gallery.children.length - 1];
    } else {
      nextPhoto--;
    }
    lightboxImage.src = gallery.children[nextPhoto].children[0].src; // Example logic to go to the next image
  }
});
