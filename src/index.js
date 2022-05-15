import './styles/main.css';
import logo from './assets/3.svg';
import bg from './assets/0.jpg';

import * as homePage from './home';
import * as menuPage from './menu';
import * as contactPage from './contact';

const pageSetUp = (()=>{
    document.getElementById('logo').src=logo;
    const topContentBg = document.getElementById('top-content');
    topContentBg.style.background=`radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg})`;
    topContentBg.style.backgroundSize='cover';
})();

const page = (()=>{
    const container = document.getElementById('container');

    const nav = document.getElementsByClassName('nav');
    nav[0].addEventListener('click',home);
    nav[1].addEventListener('click',menu);
    nav[2].addEventListener('click',contact);

    function home(){
        clear();
        homePage.renderHome();
        nav[0]?.classList.add('btn-active');
        nav[1]?.classList.remove('btn-active');
        nav[2]?.classList.remove('btn-active');
    }
    function menu(){
        clear();
        menuPage.renderMenu();
        nav[0]?.classList.remove('btn-active');
        nav[1]?.classList.add('btn-active');
        nav[2]?.classList.remove('btn-active');
    }
    function contact(){
        clear();
        contactPage.renderContact();
        nav[0]?.classList.remove('btn-active');
        nav[1]?.classList.remove('btn-active');
        nav[2]?.classList.add('btn-active');
    }
    function clear(){
        container.innerHTML='';
    }
    return{
        home,
        menu,
        contact
    }
})();

page.home();
