// alert('Witaj na mojej stronie, zajrzyj do consoli po więcej informacji');
const firstName = 'Sławek';
const age = 200;
console.log(`Siema, nazywam się ${firstName}, zajrzyj  i mam ${age} lat.`);

// const header = document.getElementsByClassName('.main-header');
// console.log(header); 
// powyżej - jQuery

const header = document.querySelector('.main-header--js');
console.log(header);
header.innerHTML = 'Witaj w moim dzienniczku!';



// function calculate(myNumber) {
//     console.log('Dostalam ' + myNumber);
//     myNumber = myNumber * 7;
//     return 'wynik ' + myNumber;
// }

// const myResult = calculate(age);

// console.group(myResult);

function greet(age, firstName) {
    console.log(
        'Witaj Drogi Odwiedzający, nazywam się ' +  firstName + ' mam ' + age + ' lata.'
    );
}
greet(age, firstName);

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
createContent('.footer--js', 'Strona stwworzona w ramach kursu WTF');