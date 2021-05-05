/*
Event Handler
    Inline HTML attribute
    Element method

addEventListener()

*/


// Event Handler

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightBlue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;



function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightBlue';
}

const p3 = document.querySelector('.p3');
p3.onclick = ubahWarnaP3;


/* ----------------------------------------------------------------------*/

// const p3 = document.querySelector('.p3');

// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'lightBlue';
// });

// p3.addEventListener('click', function(){
//     p3.style.color = 'red';
// });


// HOVER CSS

const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightBlue';
});

p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});