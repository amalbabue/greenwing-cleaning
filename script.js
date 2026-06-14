document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const subject = encodeURIComponent("Quote Request - Greenwing Cleaning Services");
  const body = encodeURIComponent(
`New quote request from Greenwing Cleaning website:

Name: ${data.get("name")}
Company: ${data.get("company")}
Phone: ${data.get("phone")}
Email: ${data.get("email")}
Service Needed: ${data.get("service")}

Message:
${data.get("message")}`
  );

  window.location.href = `mailto:amal@greenwingcleaning.ca?subject=${subject}&body=${body}`;
});
