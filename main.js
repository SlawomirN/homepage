// alert('Witaj na mojej stronie, zajrzyj do consoli po więcej informacji');
// const firstName = 'Sławek';
// const age = 200;
// console.log(`Siema, nazywam się ${firstName}, zajrzyj  i mam ${age} lat.`);

// const header = document.getElementsByClassName('.main-header');
// console.log(header);

const header = document.querySelector('.main-header--js');
console.log(header);
header.innerHTML = 'Witaj w moim dzienniczku!';

const footer = document.querySelector('.footer--js');
footer.innerHTML = '<strong>&#169; Strona stworzona w ramach szkolenia WTF</strong>';
