// JavaScript Document
function hamburger() {
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 375px)").matches) {
              console.log("Screen width is at least 500px")
            } else {
            document.getElementById("navtest").style.display = "none";
            }
          })
    }