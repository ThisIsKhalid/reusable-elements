// ------------ mobile nav -----------------------
function toggleNav() {
  var nav = document.querySelector(".mobile_nav");
  var body = document.querySelector("body");
  nav.classList.toggle("nav_active");

  // If nav is active, disable scrolling on the body
  if (nav.classList.contains("nav_active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

// ---------- dropdown menu
function toggleDropdown() {
  var dropdown = document.getElementById("menu_dropdown");
  // var arrowIcon = document.getElementById("arrowIcon");

  dropdown.classList.toggle("hidden");
  // arrowIcon.classList.toggle("rotate-180");
}

function toggleResourcesDropdown() {
  var dropdown = document.getElementById("resources_dropdown");
  // var arrowIcon = document.getElementById("arrowIcon");

  dropdown.classList.toggle("hidden");
  // arrowIcon.classList.toggle("rotate-180");
}

function toggleQuoteDropdown() {
  var dropdown = document.getElementById("quote_dropdown_id");

  dropdown.classList.toggle("hidden");
}
