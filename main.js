// navbar scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const socialButtons = document.querySelector(".navbar-social");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    socialButtons.classList.remove("d-none"); // Show the social buttons
  } else {
    navbar.classList.remove("scrolled");
    socialButtons.classList.add("d-none"); // Hide the social buttons
  }
});

// hero text
const words = ["DEVELOPER", "FREELANCER", "STUDENT"]; // Words to be typed
let currentWordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Typing speed (in ms) per letter
const erasingSpeed = 100; // Erasing speed per letter
const delayBetweenWords = 1000; // Delay before typing the next word

const typingText = document.getElementById("typing-text");

function typeWords() {
  const currentWord = words[currentWordIndex];

  if (!isDeleting && charIndex < currentWord.length) {
    // Typing the word letter by letter
    typingText.textContent += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(typeWords, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    // Erasing the word letter by letter
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWords, erasingSpeed);
  } else {
    // Switch between typing and erasing
    isDeleting = !isDeleting;
    if (!isDeleting) {
      // Move to the next word after erasing
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
    setTimeout(typeWords, delayBetweenWords);
  }
}

// Start the typing effect
setTimeout(typeWords, delayBetweenWords);

function openModal(imgElement) {
  var modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src; // Set the image source correctly
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show(); // Display the modal
}

function openDemo() {
  const websiteURL = "https://addbot.netlify.app/";
  document.querySelector("#demoModal iframe").src = websiteURL;
  const modal = new bootstrap.Modal(document.getElementById("demoModal"));
  modal.show();
}

function showImage(src) {
  document.getElementById("modalImage").src = src;
}
