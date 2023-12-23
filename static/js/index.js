// Start Importing the UI Elemnts.
import {
  headingDemo,
  input,
  toggleBar,
  optionsPanel,
  arrOfNormalText,
} from './modules/uiElements.js';
// End Importing the UI Elemnts.
import headingTextFunctionality from './modules/headingText.js';
import normalTextFunctionality from './modules/normalText.js';

headingTextFunctionality();
normalTextFunctionality();
// Start the Toggle options panel depending on the status of the content.
const showOptionsPanel = (inputValue) => {
  if (inputValue.substring(0, 2) === '/1') {
    if (arrOfNormalText.length === 0 && headingDemo.innerHTML === '') {
      optionsPanel.style.visibility = 'visible';
    } else {
      optionsPanel.style.visibility = 'hidden';
      alert('You write the header before');
    }
  } else if (inputValue === '') {
    optionsPanel.style.visibility = 'hidden';
  }
};

input.addEventListener('keyup', () => {
  showOptionsPanel(input.value);
});
// End the Toggle options panel depending on the status of the content.

// Start the Toggle of the options panel depending on the bar icon.
const togglePanel = () => {
  if (optionsPanel.style.visibility === 'hidden') {
    optionsPanel.style.visibility = 'visible';
  } else {
    optionsPanel.style.visibility = 'hidden';
  }
};
toggleBar.addEventListener('click', togglePanel);
// End the Toggle of the options panel depending on the bar icon.