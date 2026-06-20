document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.getElementById("quoteForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent("Quote Request - Greenwing Cleaning Services");
  const body = encodeURIComponent(
`New quote request from Greenwing Cleaning website:

Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Service Needed: ${data.get("service")}

Message:
${data.get("message")}`
  );
  window.location.href = `mailto:amal@greenwingcleaning.ca?subject=${subject}&body=${body}`;
});
