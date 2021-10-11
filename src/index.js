import {loadHomePage} from './home';
import {loadMenuPage} from './menu';
import {loadContactPage} from './contact';
import './style.css';

// initialize page
loadHomePage();

// only clear DOM contents in class right's class main
// when switch back to home, only create class right's class main
const headerTabs = document.querySelectorAll('.header > ul > li > a');
headerTabs.forEach(tab => tab.addEventListener('click', () => {
    // clear DOM here
    const main = document.querySelector('.main');
    let child = main.lastElementChild; 
    while (child) {
        main.removeChild(child);
        child = main.lastElementChild;
    }

    // write DOM here
    if (tab.textContent == 'home') {
        loadHomePage();
    } else if (tab.textContent == 'menu') {
        loadMenuPage();
    } else if (tab.textContent == 'contact') {
        loadContactPage();
    }
}));