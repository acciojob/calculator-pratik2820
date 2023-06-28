//your code here
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    const currentValue = input.value;
    
    if (buttonText === 'C') {
      input.value = '';
    } else if (buttonText === '=') {
      try {
        const result = eval(currentValue);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
      }
    } else {
      input.value += buttonText;
    }
  });
});
