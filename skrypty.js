const buttonContainer = document.querySelector('.button-container');

buttonContainer.style.position = 'absolute';
buttonContainer.style.left = '50px';

const buttons = buttonContainer.querySelectorAll('button');

buttons.forEach((button, index) => {
    if (index !== buttons.length - 1) { 
        button.style.marginRight = '30px';
    }
});
