let btn = document.querySelector('.btn');
console.log(btn);

let body1 = document.querySelector('.modal-body');
console.log(body1);

let body2 = document.querySelector('.modal-body2');
console.log(body2);

let body3 = document.querySelector('.modal-body3');
console.log(body2);

btn.addEventListener('click', function(){
    body1.classList.add('focus');
    setTimeout(function(){
        body2.classList.add('focus');
    }, 1000);
    // setTimeout(function(){
    //     body2.classList.remove('focus');
    // }, 3000);
    // setTimeout(function(){
    //     body3.classList.add('focus');
    // }, 4000);
    
});


