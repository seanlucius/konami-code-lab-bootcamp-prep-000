const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


let index = 0;

const body = document.querySelector('body');

function init() {
  
  body.addEventListener('keydown', function(e) {
    
    const key = e.key;
    
    if (key === codes[index]) {
      
      index++
    }
  })
}
