// ===== BACK TO TOP BUTTON =====
const backToTop = document.createElement("button");
backToTop.textContent = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll smoothly to top on click
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== COLLAPSIBLE SECTIONS =====
const collapsibleHeaders = document.querySelectorAll("h3");

collapsibleHeaders.forEach((header) => {
  let next = header.nextElementSibling;
  const wrapper = document.createElement("div");
  wrapper.style.transition = "max-height 0.3s ease";
  wrapper.style.overflow = "hidden";
  wrapper.style.maxHeight = "1000px";

  while (next && next.tagName !== "H3") {
    let temp = next.nextElementSibling;
    wrapper.appendChild(next);
    next = temp;
  }
  header.parentNode.insertBefore(wrapper, header.nextSibling);

  header.addEventListener("click", () => {
    if (wrapper.style.maxHeight === "0px") {
      wrapper.style.maxHeight = "1000px";
    } else {
      wrapper.style.maxHeight = "0px";
    }
  });
});
