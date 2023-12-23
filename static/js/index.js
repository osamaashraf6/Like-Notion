// All required elements
const headingDemo = document.querySelector('#headingDemo');
const textDemo = document.querySelector('#textDemo');
const input = document.querySelector('#text');
const headingOption = document.querySelector('.headingOption');
const toggleBar = document.querySelector('.toggle');
const arr = [];
// ----------------------------------------------------------------

// ----------------------------------------------------------------
const showOptionsPanel = (inputValue) => {
  if (inputValue.substring(0, 2) === '/1') {
    if (arr.length === 0 && headingDemo.innerHTML === '') {
      document.querySelector('.optionsPanel').style.visibility = 'visible';
    } else {
      document.querySelector('.optionsPanel').style.visibility = 'hidden';
      alert('You write the header before');

      // inputValue = "";
    }
  } else if (inputValue === '') {
    document.querySelector('.optionsPanel').style.visibility = 'hidden';
  }
};

input.addEventListener('keyup', () => {
  showOptionsPanel(input.value);
});
// ----------------------------------------------------------------

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (input.value.substring(0, 3) === '/+1') {
      if (headingDemo.innerHTML !== '') {
        document.querySelector('.toggle').style.display = 'block';
        const textv = input.value.substring(3);
        arr.push(textv);
        textDemo.innerHTML = '';
        arr.forEach((item) => {
          textDemo.innerHTML += `<p>${item}</p>`;
        });
        input.value = '';
      } else {
        alert('Please make a header firstly');
        input.value = '';
      }
    } else {
      // input.value = "";
    }
  }
});

// ----------------------------------------------------------------
headingOption.addEventListener('click', () => {
  if (input.placeholder === 'Type / for blocks, @ to link docs or people') {
    input.value = '';
    input.style.fontSize = '25px';
    input.placeholder = 'Heading 1';
    document.querySelector('.optionsPanel').style.visibility = 'hidden';
  }
  //= ======
  if (input.placeholder === 'Heading 1') {
    input.addEventListener('keypress', (e) => {
      if (input.placeholder === 'Heading 1') {
        if (e.key === 'Enter') {
          e.preventDefault();
          // eslint-disable-next-line no-use-before-define
          addHeading1(input);
          input.placeholder = 'Type / for blocks, @ to link docs or people';
          input.style.fontSize = '13px';
        }
      }
    });
  }
  //= =======
});
// ----------------------------------------------------------------

const addHeading1 = (input) => {
  const headingValue = input.value;
  const headingElement = document.createElement('h1');
  headingElement.classList.add('headingResult');
  headingElement.textContent = headingValue;
  headingDemo.appendChild(headingElement);
  toggleBar.style.display = 'block';
  input.value = '';
};

toggleBar.addEventListener('click', () => {
  if (document.querySelector('.optionsPanel').style.visibility === 'hidden') {
    document.querySelector('.optionsPanel').style.visibility = 'visible';
  } else {
    document.querySelector('.optionsPanel').style.visibility = 'hidden';
  }
});
