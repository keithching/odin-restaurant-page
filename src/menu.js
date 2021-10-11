import Img1Src from './img1.jpeg';
import IceCream from './icecream.jpeg';
import parfait from './桜パフェ.png';

const loadMenuPage = () => {

    const main = document.querySelector('.main');

    // menu item 1
    const menu1 = document.createElement('div');
    menu1.classList.add('menu');

    const menu1Img = document.createElement('div');
    menu1Img.classList.add('menuImg');

    const Img1 = new Image();
    Img1.src = Img1Src;
    menu1Img.appendChild(Img1);

    const menu1Title = document.createElement('p');
    menu1Title.classList.add('menuTitle');
    menu1Title.textContent = 'モッツァレラチーズ';

    const menu1Price = document.createElement('p');
    menu1Price.classList.add('menuPrice');
    menu1Price.textContent = '￥1,300 (税込)';

    menu1.appendChild(menu1Img);
    menu1.appendChild(menu1Title);
    menu1.appendChild(menu1Price);


    // menu item 2
    const menu2 = document.createElement('div');
    menu2.classList.add('menu');

    const menu2Img = document.createElement('div');
    menu2Img.classList.add('menuImg');

    const Img2 = new Image();
    Img2.src = IceCream;
    menu2Img.appendChild(Img2);

    const menu2Title = document.createElement('p');
    menu2Title.classList.add('menuTitle');
    menu2Title.textContent = '櫻アイス';

    const menu2Price = document.createElement('p');
    menu2Price.classList.add('menuPrice');
    menu2Price.textContent = '￥600 (税込)';

    menu2.appendChild(menu2Img);
    menu2.appendChild(menu2Title);
    menu2.appendChild(menu2Price);


    // menu item 3
    const menu3 = document.createElement('div');
    menu3.classList.add('menu');

    const menu3Img = document.createElement('div');
    menu3Img.classList.add('menuImg');

    const Img3 = new Image();
    Img3.src = parfait;
    menu3Img.appendChild(Img3);

    const menu3Title = document.createElement('p');
    menu3Title.classList.add('menuTitle');
    menu3Title.textContent = '櫻パフェ';

    const menu3Price = document.createElement('p');
    menu3Price.classList.add('menuPrice');
    menu3Price.textContent = '￥800 (税込)';

    menu3.appendChild(menu3Img);
    menu3.appendChild(menu3Title);
    menu3.appendChild(menu3Price);


    main.appendChild(menu1);
    main.appendChild(menu2);
    main.appendChild(menu3);
};

export {
    loadMenuPage,
};