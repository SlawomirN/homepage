// alert('Witaj na mojej stronie, zajrzyj do consoli po więcej informacji');
const firstName = 'Sławek';
const age = 200;
console.log(`Siema, nazywam się ${firstName}, zajrzyj  i mam ${age} lat.`);

// const header = document.getElementsByClassName('.main-header');
// console.log(header); 
// powyżej - jQuery


// const header = document.querySelector('.main-header--js');
// console.log(header);
// header.innerHTML = 'Witaj w moim dzienniczku!';



// function calculate(myNumber) {
//     console.log('Dostalam ' + myNumber);
//     myNumber = myNumber * 7;
//     return 'wynik ' + myNumber;
// }

// const myResult = calculate(age);

// console.group(myResult);

function greetOld(age, firstName) {
    console.log(
        'Witaj Drogi Odwiedzający, nazywam się ' + firstName + ' mam ' + age + ' lata.'
    );
}

greetOld(age, firstName);

const greet = (age, firstName) => {
    console.log(
        'Witaj Drogi Odwiedzający, nazywam się ' + firstName + ' i mam ' + age + ' lata.'
    );
}
greet(22, 'Maciej');


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
createContent('.footer--js', 'Strona stwworzona w ramach kursu WTF');

const calculate = (myNumber) => myNumber * 7
console.log(calculate(7));

console.log(console);

const button = document.querySelector('.action--js');
console.log(button);

const myClick = () => {
    // console.log('Kliknąłeś');
    const header = document.querySelector('.main-header--js');
    header.innerHTML = 'Witaj w moim dzienniczku!';
}


// button.addEventListener('click', myClick);


// button.addEventListener('click', (e) => {
//     console.log(e.target);
// });


button.addEventListener('click', (e) => {
    const header = document.querySelector('.main-header--js');
    header.innerHTML = 'Witaj w moim dzienniczku!';
});

// zamiast 'click' może być 'mouseenter' lub 'mouseleave'!!!
// button.addEventListener('mouseleave', (e) => {
//     const header = document.querySelector('.main-header--js');
//     header.innerHTML = 'Witaj w moim dzienniczku!';
// });
