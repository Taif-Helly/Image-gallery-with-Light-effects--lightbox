const gallery = document.querySelector(".gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightboxImage");
const closeBtn = document.querySelector(".closeBtn");

gallery.addEventListener("click", function (event) {
  const clickedPhoto = event.target.src;
  if (clickedPhoto) {
    lightboxImage.src = clickedPhoto;
    lightbox.classList.add("active");
  }
});

// CLOSE BUTTON
closeBtn.addEventListener("click", function () {
  console.log("CLICK BUTTON");
  lightbox.classList.remove("active");
});

// CLOSE WHEN CLICKING ANYWHERE
lightbox.addEventListener("click", function (event) {
  console.log("CLICK ANYWHERE");
  lightbox.classList.remove("active");
});

// CLOSE WITH ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && lightbox.classList.contains("active")) {
    console.log("ESCAPE");
    lightbox.classList.remove("active");
  }
});
