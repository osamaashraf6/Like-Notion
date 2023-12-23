// Start Importing the UI Elemnts.
import {
  headingDemo,
  input,
  headingOption,
  toggleBar,
  optionsPanel,
  firstPlaceholder,
  secondPlaceholder,
} from './uiElements.js';
// End Importing the UI Elemnts.
const eee = () => {
// Start the adding style to the heading input.
  const addingStyleToHeadingInpt = () => {
    if (input.placeholder === firstPlaceholder) {
      input.value = '';
      input.style.fontSize = '25px';
      input.placeholder = secondPlaceholder;
      optionsPanel.style.visibility = 'hidden';
    }
  };
  // End the adding style to the heading input.

  // Start the UI of the Heading format.
  const headingTextUI = (input) => {
    const headingValue = input.value;
    const headingElement = document.createElement('h1');
    headingElement.classList.add('headingResult');
    headingElement.textContent = headingValue;
    headingDemo.appendChild(headingElement);
    toggleBar.style.display = 'block';
    input.value = '';
  };

  // End the UI of the Heading format.

  // Start the format of heading text.
  const headingTextFormat = () => {
    if (input.placeholder === secondPlaceholder) {
      input.addEventListener('keypress', (e) => {
        if (input.placeholder === secondPlaceholder) {
          if (e.key === 'Enter') {
            e.preventDefault();
            // eslint-disable-next-line no-use-before-define
            headingTextUI(input);
            input.placeholder = firstPlaceholder;
            input.style.fontSize = '13px';
          }
        }
      });
    }
  };
  headingOption.addEventListener('click', () => {
    addingStyleToHeadingInpt();
    headingTextFormat();
  });
// End the format of heading text.
};
export default eee;