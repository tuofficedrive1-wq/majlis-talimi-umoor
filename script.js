
// Highlight current page in navbar
const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }
});
