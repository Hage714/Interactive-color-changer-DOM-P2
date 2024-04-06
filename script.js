document.addEventListener('DOMContentLoaded', function() {
    // Your code to execute after DOM content is loaded goes here
    console.log('DOM content loaded!');
    // Example: Manipulate DOM elements, fetch data, etc.
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Selecting button with class "color-box"
    const buttonsByClass = document.querySelectorAll('color-box');
    
    // Selecting button with id "change-color-btn"
    const buttonById = document.getElementById('change-color-btn');
    
    // Adding a click event listener to each button
    buttonsByClass.forEach(color-box => {
        color-box.addEventListener('click', function() {
        console.log('Button with class clicked');
      });
    });
    
    buttonById.addEventListener('click', function() {
      console.log('Button with id clicked');
    });
  });
  
  function getRandomColor() {
    // Generating random values for red, green, and blue
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    // Constructing hexadecimal color string
    const color = '#' + 
      red.toString(16).padStart(2, '0') +
      green.toString(16).padStart(2, '0') +
      blue.toString(16).padStart(2, '0');
    
    return color;
  }
  
  // Example usage:
  const randomColor = getRandomColor();
  console.log(randomColor); // Output a random color in hexadecimal format

  // Function to generate a random color
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Selecting the button with id "myButton"
    const button = document.getElementById('change-color-btn');
    
    // Adding click event listener to the button
    button.addEventListener('click', function() {
      // Get a random color
      const randomColor = getRandomColor();
      
      // Selecting all elements with class "button"
      const buttons = document.querySelectorAll('.color-box');
      
      // Changing background color of each button with class "button"
      buttons.forEach(color-box => {
        color-box.style.backgroundColor = randomColor;
      });
    });
  });
  
  