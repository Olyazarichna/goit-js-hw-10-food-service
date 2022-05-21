import menu from './menu.json';
import template from './templates/menuItem.hbs';

const refs = {
  listEl: document.querySelector('.js-menu'),
  checkBoxEl: document.querySelector('.theme-switch__icon'),
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

function createMarkup(menu) {
    // const markup = menu.map(template);
    const markup = template(menu);
    refs.listEl.insertAdjacentHTML('beforend', markup);
}
createMarkup(menu);

refs.checkBox.addEventListener('change', checkedBoxChange);

function checkedBoxChange(){

    if(!refs.checkBox.checked) {
      document.body.classList.add(Theme.LIGHT);
      document.body.classList.remove(Theme.DARK);
    } else {
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
    } 
    // localStorage.setItem();
}