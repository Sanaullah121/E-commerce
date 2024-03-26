// Get the quantity input and buttons
const quantityInput = document.querySelector('.quantity-input');
const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');

// Add event listener for the decrement button
decrementBtn.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

// Add event listener for the increment button
incrementBtn.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});


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



function displayImage(image) {
  var displayedImage = document.getElementById("displayed-image");
  displayedImage.src = image.src;
  displayedImage.alt = image.alt;
}

