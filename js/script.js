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

function toggleOverlay1(img) {
  var overlayImage = document.querySelector(".pic-overlay1 img");
  var thumbImages = document.querySelectorAll(".thumb img");

  // Store the source of the clicked image
  var clickedImageSrc = img.src;

  // Find the matching thumb image with the same source as the clicked image
  var matchingThumb = Array.from(thumbImages).find(function (thumb) {
    return thumb.src === clickedImageSrc;
  });

  // If a matching thumb image is found, swap its source with the overlay image source
  if (matchingThumb) {
    var thumbImageSrc = overlayImage.src;
    overlayImage.src = clickedImageSrc;
    matchingThumb.src = thumbImageSrc;
  }

  var grid = document.querySelector(".pic-grid");
  var overlay = document.getElementById("overlay");

  grid.style.display = "none";
  overlay.style.display = "flex";
}

function hideOverlay1() {
  var grid = document.querySelector(".pic-grid");
  var overlay = document.getElementById("overlay");

  grid.style.display = "flex";
  overlay.style.display = "none";
}

window.addEventListener("click", function (event) {
  var grid = document.querySelector(".pic-grid");
  var overlay = document.getElementById("overlay");

  if (!overlay.contains(event.target) && !grid.contains(event.target)) {
    hideOverlay();
  }
});

function toggleOverlay2(img) {
  // New function for the second section (pic-grid2 and pic-grid-overlay2)
  var overlayImage = document.querySelector(".pic-overlay2 img");
  var thumbImages = document.querySelectorAll(".thumb2 img");

  // Store the source of the clicked image
  var clickedImageSrc = img.src;

  // Find the matching thumb image with the same source as the clicked image
  var matchingThumb = Array.from(thumbImages).find(function (thumb) {
    return thumb.src === clickedImageSrc;
  });

  // If a matching thumb image is found, swap its source with the overlay image source
  if (matchingThumb) {
    var thumbImageSrc = overlayImage.src;
    overlayImage.src = clickedImageSrc;
    matchingThumb.src = thumbImageSrc;
  }

  var grid = document.querySelector(".pic-grid2");
  var overlay = document.getElementById("overlay2");

  grid.style.display = "none";
  overlay.style.display = "flex";
}

function hideOverlay2() {
  // New function for the second section (pic-grid2 and pic-grid-overlay2)
  var grid = document.querySelector(".pic-grid2");
  var overlay = document.getElementById("overlay2");

  grid.style.display = "flex";
  overlay.style.display = "none";
}

window.addEventListener("click", function (event) {
  // Existing event listener for the first section (pic-grid and pic-grid-overlay)
  var grid = document.querySelector(".pic-grid");
  var overlay = document.getElementById("overlay");

  if (!overlay.contains(event.target) && !grid.contains(event.target)) {
    hideOverlay1();
  }

  // New event listener for the second section (pic-grid2 and pic-grid-overlay2)
  var grid2 = document.querySelector(".pic-grid2");
  var overlay2 = document.getElementById("overlay2");

  if (!overlay2.contains(event.target) && !grid2.contains(event.target)) {
    hideOverlay2();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const flashOverlay = document.querySelector(".flash-overlay");
  const flashOverlayContent = document.querySelector(".flash-overlay-content");
  const flashImages = document.querySelectorAll(".flash img");

  // Function to open the overlay and display the clicked image
  function openOverlay(imageSrc) {
    flashOverlay.style.display = "block";
    flashOverlayContent.querySelector("img").src = imageSrc;
  }

  // Function to close the overlay
  function closeOverlay() {
    flashOverlay.style.display = "none";
    flashOverlayContent.querySelector("img").src = "";
  }

  // Event listener for clicking on a flash image
  flashImages.forEach((image) => {
    image.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click from bubbling up to the window
      const imageSrc = image.getAttribute("src");
      openOverlay(imageSrc);
    });
  });

  // Event listener for clicking outside the overlay content to close it
  flashOverlay.addEventListener("click", function (event) {
    if (!flashOverlayContent.contains(event.target)) {
      closeOverlay();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const portOverlay = document.querySelector(".port-overlay-wrapper");
  const portImages = document.querySelectorAll(".port img");
  const portImage = document.querySelector(".port-overlay img");

  // Function to open the overlay and display the clicked image
  function openOverlay(imageSrc) {
    portOverlay.style.display = "block";
    portImage.src = imageSrc;
  }

  // Function to close the overlay
  function closeOverlay() {
    portOverlay.style.display = "none";
    portImage.src = "";
    portImage.style.transform = "scale(1)"; // Reset image scaling
  }

  // Function to scale the image based on the mouse position
  function scaleImage(event) {
    const rect = portOverlay.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const scaleRatioX = mouseX / rect.width;
    const scaleRatioY = mouseY / rect.height;

    portImage.style.transformOrigin = `${scaleRatioX * 100}% ${
      scaleRatioY * 100
    }%`;
    portImage.style.transform = `scale(1.5)`;
  }

  // Event listener for clicking on a port image
  portImages.forEach((image) => {
    image.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click from bubbling up to the window
      const imageSrc = image.getAttribute("src");
      openOverlay(imageSrc);
    });
  });

  // Event listener for clicking outside the overlay to close it
  window.addEventListener("click", function (event) {
    if (!portOverlay.contains(event.target)) {
      closeOverlay();
    }
  });

  // Event listener for clicking on the overlay to close it
  portOverlay.addEventListener("click", function () {
    closeOverlay();
  });

  // Event listener for mousemove to scale the image when hovering over the overlay
  portOverlay.addEventListener("mousemove", function (event) {
    scaleImage(event);
  });

  // Event listener to reset the image scaling when the mouse leaves the overlay
  portOverlay.addEventListener("mouseleave", function () {
    portImage.style.transform = "scale(1)";
  });
});
