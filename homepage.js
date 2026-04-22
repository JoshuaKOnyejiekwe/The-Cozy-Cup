import { db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

const slidesContainer = document.getElementById("slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let slides = [];

// LOAD IMAGES FROM FIREBASE
async function loadSlides() {
  try {
    const snapshot = await getDocs(collection(db, "homepage_images"));
 
    slides = snapshot.docs.map(doc => doc.data());
 
    renderSlides();
  } catch (error) {
    console.error("Failed to load slides:", error);
  }
}

function renderSlides() {
  slidesContainer.innerHTML = slides.map(item => `
    <div class="slide">
      <img src="${item.image}" alt="">
    </div>
  `).join("");

  updateSlidePosition();
}

// MOVE SLIDES
function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// BUTTON EVENTS
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

// AUTO SLIDE (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}, 5000);

// INIT
loadSlides();
