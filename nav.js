document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  var logo = document.querySelector(".logo");
  var flex = document.querySelector(".flex");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.style.padding =
        "0.5em 1em 0.5em 1em"; /* Change to your desired padding when scrolling */
      logo.style.width =
        "75px"; /* Change to your desired logo width when scrolling */
      logo.style.height =
        "75px"; /* Change to your desired logo height when scrolling */
    } else {
      nav.style.padding =
        "0.5em 1em 0.5em 1em"; /* Change to your default padding */
      logo.style.width = "100px"; /* Change to your default logo width */
      logo.style.height = "100px"; /* Change to your default logo height */
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
