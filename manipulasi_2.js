// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()



const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru'); 

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBarui di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
pBaru.style.background = 'grey';
pBaru.style.color = 'white';



// buat element
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// remove
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

pBaru.style.backgroundColor = 'lightGreen';
liBaru.style.backgroundColor = 'lightGreen';

