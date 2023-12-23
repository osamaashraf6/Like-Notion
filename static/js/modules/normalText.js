// Start Importing the UI Elemnts.
import {
  headingDemo,
  textDemo,
  input,
  arrOfNormalText,
} from './uiElements.js';
// End Importing the UI Elemnts.

const normalTextFunctionality = () => {
  // Start the UI of the normal text format.
  const normalTextUI = () => {
    if (input.value.substring(0, 3) === '/+1') {
      if (headingDemo.innerHTML !== '') {
        document.querySelector('.toggle').style.display = 'block';
        const textv = input.value.substring(3);
        arrOfNormalText.push(textv);
        textDemo.innerHTML = '';
        arrOfNormalText.forEach((item) => {
          textDemo.innerHTML += `<p>${item}</p>`;
        });
        input.value = '';
      } else {
        alert('Please make a header firstly');
        input.value = '';
      }
    }
  };
  // End the UI of the normal text format.

  // Start the format of normal text.
  const normalTextFormat = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      normalTextUI();
    }
  };
  input.addEventListener('keypress', normalTextFormat);
// End the format of normal text.
};
export default normalTextFunctionality;