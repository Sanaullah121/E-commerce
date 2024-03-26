




function changebg() {
    var navbar = document.getElementById('Navbar');
    var  scrollvalue = window.scrollY;
    if(scrollvalue < 150){
        navbar.classList.remove('bgcolor');
    } else{
        navbar.classList.add('bgcolor');
    }

}
window.addEventListener('scroll',changebg);




const totop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    var  scrollv = window.scrollY;
    if (scrollv > 150 ){
        totop.classList.add("active");
    } else{
        totop.classList.remove("active");
    }
    
})



// // Add an event listener to the "View Image" link
// document.querySelector('.view-icon').addEventListener('click', function(e) {
//     e.preventDefault();
    
//     // Get the source of the large image
//     const largeImageSrc = 'giv.jpg'; // Replace 'large-image.jpg' with the path to your large image
  
//     // Set the large image source in the overlay
//     document.querySelector('.large-image').src = largeImageSrc;
  
//     // Show the image overlay
//     document.querySelector('.image-overlay').style.display = 'block';
//   });
  
//   // Add an event listener to the "Cancel" button
//   document.querySelector('.cancel-button').addEventListener('click', function() {
//     // Hide the image overlay when the "Cancel" button is clicked
//     document.querySelector('.image-overlay').style.display = 'none';
//   });
  

document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton");
    const popupContainer = document.getElementById("popupContainer");
    const closeButton = document.getElementById("closeButton");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton2");
    const popupContainer = document.getElementById("popupContainer2");
    const closeButton = document.getElementById("closeButton2");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton3");
    const popupContainer = document.getElementById("popupContainer3");
    const closeButton = document.getElementById("closeButton3");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton4");
    const popupContainer = document.getElementById("popupContainer4");
    const closeButton = document.getElementById("closeButton4");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton5");
    const popupContainer = document.getElementById("popupContainer5");
    const closeButton = document.getElementById("closeButton5");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton6");
    const popupContainer = document.getElementById("popupContainer6");
    const closeButton = document.getElementById("closeButton6");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const eyeButton = document.getElementById("eyeButton7");
    const popupContainer = document.getElementById("popupContainer7");
    const closeButton = document.getElementById("closeButton7");
  
    eyeButton.addEventListener("click", function () {
      popupContainer.style.display = "block";
    });
  
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });
  
  
  
