document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  var logo = document.querySelector(".logo");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.style.padding = "0.5em 1em 0.5em 1em";
      logo.style.width = "75px";
      logo.style.height = "75px";
    } else {
      nav.style.padding = "0.5em 1em 0.5em 1em";
      logo.style.width = "100px";
      logo.style.height = "100px";
    }
  });
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
