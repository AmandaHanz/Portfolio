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

// script.js

const chatbotBtn = document.getElementById("chatbotBtn");
const chatbotContainer = document.getElementById("chatbotContainer");
const closeBtn = document.getElementById("closeBtn");
const messagesContainer = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const botResponses = {
  hello: "Hello! How can I assist you today?",
  hi: "Hi there! How can I help you?",
  help: "I can provide information about Amanda's skills, projects, experience, and more. Ask me anything!",
  skills: "Amanda is skilled in Angular, Azure, Ballerina, React, Spring Boot, and Three.js. She has expertise in full-stack development, cloud computing, AI, and web technologies.",
  projects: "Amanda has worked on various projects, including:\n• LEXi: An AI-powered assistive learning platform for dyslexic students.\n• Voxie: A voice-powered app for speech assistance.\n• Cosmo360: A 3D universe exploration project.\n• Gravitational Attraction Simulation: A real-time physics visualization.",
  contact: "You can contact Amanda via email at amandahansamali18@gmail.com.",
  experience: "Amanda has experience as a Technical Writer at Medium and as an Ambassador at Freedom World.",
  education: "Amanda is currently pursuing a BSc.(Hons) in Computer Science at the University of Westminster.",
  certificates: "Amanda holds certifications in CS50x from Harvard University and Microsoft Azure AI Fundamentals.",
  default: "I'm not sure how to answer that. Try asking about skills, projects, experience, or certificates.",
};

let messageId = 0;

const handleSend = () => {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  const userMessageElement = createMessageElement(userMessage, "user");
  messagesContainer.appendChild(userMessageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  userInput.value = "";
  sendBtn.disabled = true;

  setTimeout(() => {
    const botMessage = getBotResponse(userMessage);
    const botMessageElement = createMessageElement(botMessage, "bot");
    messagesContainer.appendChild(botMessageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    sendBtn.disabled = false;
  }, 1000);
};

const createMessageElement = (text, sender) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = text;
  return messageElement;
};

const getBotResponse = (input) => {
  for (const [keyword, response] of Object.entries(botResponses)) {
    if (input.toLowerCase().includes(keyword)) {
      return response;
    }
  }
  return botResponses.default;
};

const handleUserInput = () => {
  sendBtn.disabled = userInput.value.trim() === "";
};

chatbotBtn.addEventListener("click", () => {
  chatbotContainer.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  chatbotContainer.style.display = "none";
});

sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("input", handleUserInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});
