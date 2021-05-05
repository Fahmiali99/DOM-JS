// DOM Selection

// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'YOI'

//  document.getElementsByTagName() 
//  -> HTMLCollections

const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'green';
// p[2].style.backgroundColor = 'red';
// p[3].style.backgroundColor = 'yellow';

for( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
} 

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// document.getElementsByClassName()
//  -> HTMLCollection 
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini di rubah dari Java Script';
p1[0].style.color = 'green';

