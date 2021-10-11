const loadContactPage = () => {

    const main = document.querySelector('.main');
    
    // hours class
    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursText = document.createElement('p');
    hoursText.textContent = 'hours';
    const hoursUL = document.createElement('ul');
    const hoursLi1 = document.createElement('li');
    hoursLi1.textContent = 'Mon 0900 - 1800';
    const hoursLi2 = document.createElement('li');
    hoursLi2.textContent = 'Tue 0900 - 1800';    
    const hoursLi3 = document.createElement('li');
    hoursLi3.textContent = 'Wed 0900 - 1800';
    const hoursLi4 = document.createElement('li');
    hoursLi4.textContent = 'Thu 0900 - 1800';
    const hoursLi5 = document.createElement('li');
    hoursLi5.textContent = 'Fri 0900 - 1800';
    const hoursLi6 = document.createElement('li');
    hoursLi6.textContent = 'Sat 0900 - 1800';
    const hoursLi7 = document.createElement('li');
    hoursLi7.textContent = 'Sun 0900 - 1800';

    hoursUL.appendChild(hoursLi1);
    hoursUL.appendChild(hoursLi2);
    hoursUL.appendChild(hoursLi3);
    hoursUL.appendChild(hoursLi4);
    hoursUL.appendChild(hoursLi5);
    hoursUL.appendChild(hoursLi6);
    hoursUL.appendChild(hoursLi7);

    hours.appendChild(hoursText);
    hours.appendChild(hoursUL);

    // location class
    const location = document.createElement('div');
    location.classList.add('location');
    const locationText1 = document.createElement('p');
    locationText1.textContent = 'location';
    const locationText2 = document.createElement('p');
    locationText2.textContent = 'Tokyo, Japan'; 

    location.appendChild(locationText1);
    location.appendChild(locationText2);


    main.appendChild(hours);
    main.appendChild(location);

};

export {loadContactPage};