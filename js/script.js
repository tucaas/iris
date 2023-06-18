function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    // Other map options...
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
    },
  });
}

// Load the Google Maps API asynchronously
function loadScript() {
  var script = document.createElement("script");
  script.src =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14145.054037132335!2d-48.5087219!3d-27.5853589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739aeb425cfbd%3A0xb71169dfe49d85ff!2sZero%20Art%20Gallery%20%26%20Tattoo%20Studio!5e0!3m2!1spt-BR!2sbr!4v1687028391219!5m2!1spt-BR!2sbr";
  document.body.appendChild(script);
}

// Call the loadScript function to load the API
loadScript();

// Get the current page URL
var currentPageUrl = window.location.href;

// Get the home page URL
var homePageUrl = window.location.origin + "/index.html";

// Get all the links in the header menu
var menuLinks = document.querySelectorAll(".header-menu a");

// Iterate through the menu links
menuLinks.forEach(function (link) {
  // Check if the link's href matches the current page URL and is not the home page URL
  if (link.href === currentPageUrl && link.href !== homePageUrl) {
    // Add the "active" class to the link
    link.classList.add("active");
  }
});
