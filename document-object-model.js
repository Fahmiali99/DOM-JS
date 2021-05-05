// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'Green';
p4.style.fontSize = '30px';

const a3 = document.querySelector('div #a p:nth-child(3)');
a3.style.color = 'Blue'
a3.style.fontSize = '40px';


// document.querySelectorAll()
const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}