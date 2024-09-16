console.log('This is separate JS file');  
//no: 01 =>directly set on the HTML element;

// <button onclick="document.body.style.  backgroundColor='yellow'">Make Yellow</button>


//no :02 [important: use this]
function makeWhite(){
    document.body.style.backgroundColor = 'white';
}

function makered(){
    document.body.style.backgroundColor = 'red';
}

//no: 03
const makeBlue = document.getElementById('make-blue')
makeBlue.onclick = Blue;

function Blue(){
    document.body.style.backgroundColor = 'blue'
}

//no: another 03 [Use Sometime]
const makePurple = document.getElementById('make-purple')
makePurple.onclick = function Purple(){
    document.body.style.backgroundColor = 'purple'
}

//no: 04
const pink = document.getElementById('make-pink')
pink.addEventListener('click', makePink)
function makePink(){
     document.body.style.backgroundColor = 'pink'
}
//no: another 04
const green = document.getElementById('make-green')
green.addEventListener('click', function makeGreen(){
     document.body.style.backgroundColor = 'green'
})


//no: final 04 [important: use this]

document.getElementById('make-goldenrod').addEventListener('click', function(){
     document.body.style.backgroundColor = 'goldenrod';
}) 


//option:01-----
function handle(){
    const thisIs = document.getElementById('this');
    thisIs.innerText = 'this is awesome dom'
}


 document.getElementById('isTh').addEventListener('click', function(){
    const thisIs = document.getElementById('this');
    thisIs.innerText = 'this is my dom'
 })
