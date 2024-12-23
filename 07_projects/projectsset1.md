# Project 1 - JavaScript Color Change

This project demonstrates how to use JavaScript to change the background color of a webpage based on button clicks. The page contains several buttons, each corresponding to a color. When clicked, the background color of the page changes to the color associated with the button.

## Code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```


# Project 2 - BMI Calculator Project

This project is a simple BMI (Body Mass Index) calculator built using JavaScript. The user inputs their height (in cm) and weight (in kg) into a form, and the BMI is calculated and displayed dynamically.

## How it works

When the user submits the form, the JavaScript listens for the `submit` event, prevents the default form submission, and then validates the height and weight inputs. If the inputs are valid, it calculates the BMI and displays it on the page. If the inputs are invalid (e.g., empty or negative), it shows an error message.

## Code

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form submission

  // Get height and weight values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validation for height
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height: ${height}`;
  }
  // Validation for weight
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight: ${weight}`;
  }
  // If both inputs are valid, calculate BMI
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Display the result
    results.innerHTML = `<span>BMI: ${bmi}</span>`;
  }
});
