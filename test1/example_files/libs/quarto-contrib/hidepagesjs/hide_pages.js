// Define a global function to hide all pages
window.hideAllPages = function() {
  var pages = document.querySelectorAll("div[class*='sd-page'], section[class*='sd-page']");
  pages.forEach(function(page) {
    page.style.display = 'none';
  });
};

// Call the function on initial load to hide all pages except the first
document.addEventListener("DOMContentLoaded", function() {
  window.hideAllPages();
  var firstPage = document.querySelector("div[class*='sd-page'], section[class*='sd-page']");
  if (firstPage) {
    firstPage.style.display = 'block';
  }
});
