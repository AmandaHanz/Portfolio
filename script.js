let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("heaader nav a");

// Toggle menu when clicking menu icon
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Function to remove active class from all nav links
function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Function to add active class to the correct nav link
function highlightActiveSection() {
  let scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust for better accuracy
  let currentSection = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  removeActiveClass();

  if (currentSection) {
    let activeLink = document.querySelector(
      `heaader nav a[href="#${currentSection}"]`
    );
    if (activeLink) {
      console.log(activeLink);
      activeLink.classList.add("active");
    }
  }
}

// Event listener for scroll
window.addEventListener("scroll", highlightActiveSection);

// Initial call to highlight the active section when the page loads
document.addEventListener("DOMContentLoaded", highlightActiveSection);

let currentIndex = 0;
const totalCertifications = certifications.length;

function showCertification(index) {
  const carouselWrapper = document.getElementById("certificationsList");
  const offset = -(index * 320); // Adjust the value based on the item width
  carouselWrapper.style.transform = `translateX(${offset}px)`;
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCertifications;
  showCertification(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCertifications) % totalCertifications;
  showCertification(currentIndex);
});