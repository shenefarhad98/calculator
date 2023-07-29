const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === 'AC') {
      display.innerText = '';
    } else if (buttonText === '=') {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = 'Error';
      }
    }else if (buttonText === 'del') {
        display.innerText = display.innerText.slice(0, -1);

    } else {
      display.innerText += buttonText;
     
    }
  
  });
});