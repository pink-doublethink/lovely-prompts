'use strict'
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const contentSections = document.querySelectorAll(".content__section");

function copyText(int) {
  let text = document.getElementById(`card-text-${int}`);

  let input = document.createElement("input");
  input.value = text.textContent;
  
  document.body.appendChild(input);
    
  input.select();
  document.execCommand("copy");
    
  document.body.removeChild(input);
}

function handleIntersection(entries) {

  for (let entry of entries) {
    const target = entry.target;
    const id = target.id;
    const link = document.querySelector(`.sidebar__link[href="#${id}"]`);
    if (entry.isIntersecting) {
      link.classList.add("active");
      for (let otherLink of sidebarLinks) {
        if (otherLink !== link) {
          otherLink.classList.remove("active");
        }
      }
      break;
    }
  }
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, 
};

const observer = new IntersectionObserver(handleIntersection, options);

for (let section of contentSections) {
  observer.observe(section);
}