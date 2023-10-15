let buttons = document.querySelectorAll('button');
let pars = document.querySelectorAll('p');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        for (let j = 0; j < pars.length; j++) {
            if (j == i) {
                pars[j].style.display = 'block';
                buttons[j].style.borderColor = '#9fa7db '
            }
            else {
                pars[j].style.display = 'none';
                buttons[j].style.borderColor = 'transparent'
            }
        }
    }
}