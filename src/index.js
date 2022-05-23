import menu from './menu.json';
import template from './templates/menuItem.hbs';

const refs = {
  listEl: document.querySelector('.js-menu'),
  checkBoxEl: document.querySelector('.theme-switch__toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createMarkup(menu) {
    // const markup = menu.map(template).join('');
    const markup = template(menu);
    refs.listEl.insertAdjacentHTML('afterbegin', markup);
}
createMarkup(menu);

refs.checkBoxEl.addEventListener('change', checkedBoxChange);

function checkedBoxChange(){
  console.log('checked');

    if(!refs.checkBoxEl.checked) {
      document.body.classList.add(Theme.LIGHT);
      document.body.classList.remove(Theme.DARK);
    } else {
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
    } 
    localStorage.setItem();
}