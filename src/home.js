import LogoSrc from './logo.jpeg';
import TitleSrc from './title.jpeg';

const loadHomePage = () => {

    const content = document.querySelector('div#content');

    // if DOM does not have class main, build everything
    if (!document.querySelector('.main')) {

        const left = document.createElement('div');
        left.classList.add('left');

        const Logo = new Image();
        Logo.classList.add('logoImg');
        Logo.src = LogoSrc;
        left.appendChild(Logo);


        const right = document.createElement('div');
        right.classList.add('right');

        // create header section DOM
        const header = document.createElement('div');
        header.classList.add('header');

        const headerUL = document.createElement('ul');
        const headerLi1 = document.createElement('li');
        const headerLi1Anchor = document.createElement('a');
        headerLi1Anchor.setAttribute('href', '#');
        headerLi1Anchor.textContent = 'home';
        headerLi1.appendChild(headerLi1Anchor);

        const headerLi2 = document.createElement('li');
        const headerLi2Anchor = document.createElement('a');
        headerLi2Anchor.setAttribute('href', '#');
        headerLi2Anchor.textContent = 'menu';
        headerLi2.appendChild(headerLi2Anchor);

        const headerLi3 = document.createElement('li');
        const headerLi3Anchor = document.createElement('a');
        headerLi3Anchor.setAttribute('href', '#');
        headerLi3Anchor.textContent = 'contact';
        headerLi3.appendChild(headerLi3Anchor);

        headerUL.appendChild(headerLi1);
        headerUL.appendChild(headerLi2);
        headerUL.appendChild(headerLi3);

        header.appendChild(headerUL);

        // create main section DOM
        const main = document.createElement('div');
        main.classList.add('main');        

        // title class
        const title = document.createElement('div');
        title.classList.add('title');
        const titleText = document.createElement('p');
        titleText.textContent = 'sakura cafe';

        const Title = new Image();
        Title.src = TitleSrc;
        Title.classList.add('titleImg');
        title.appendChild(Title);

        title.appendChild(titleText);

        // review class
        const review = document.createElement('div');
        review.classList.add('review');
        const reviewText = document.createElement('p');
        reviewText.textContent = `「一回食べたら一生忘れられない味。」`;
        review.appendChild(reviewText);



        // append classes to class main
        main.appendChild(title);
        main.appendChild(review);


        // create footer section DOM
        const footer = document.createElement('div');
        footer.classList.add('footer');
        const footerSpan = document.createElement('span');
        footerSpan.innerHTML = 'Copyright © 2021 <a href="https://github.com/keithching" target="_blank">keithching</a>';

        footer.appendChild(footerSpan);

        // append the classes to id #content
        right.appendChild(header);
        right.appendChild(main); 
        right.appendChild(footer);

        content.appendChild(left);
        content.appendChild(right);

    } else {
        // rebuild only the main
        const main = document.querySelector('.main');

        // title class
        const title = document.createElement('div');
        title.classList.add('title');
        const titleText = document.createElement('p');
        titleText.textContent = 'sakura cafe';

        const Title = new Image();
        Title.src = TitleSrc;
        Title.classList.add('titleImg');
        title.appendChild(Title);

        title.appendChild(titleText);

        // review class
        const review = document.createElement('div');
        review.classList.add('review');
        const reviewText = document.createElement('p');
        reviewText.textContent = `「一回食べたら一生忘れられない味。」`;
        review.appendChild(reviewText);



        // append classes to class main
        main.appendChild(title);
        main.appendChild(review);
    }
};

export {
    loadHomePage,
};