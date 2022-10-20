
let btn = document.getElementById('btn')

let cont = document.querySelector('.container-all');

let selectInput = document.getElementById('select')


let lineBox = '';



btn.addEventListener('click', function(){

  let sel = selectInput.value;  
  
  if(sel === 'facile'){
    
    lineBox = 10;
    
    cont.classList.remove('dnone')
    
    btn.disabled = true;
    
  }else if (sel === 'medio' ){
    
    
    lineBox = 8;
    
    cont.classList.remove('dnone')

    btn.disabled = true;

    
  }else if (sel === facile){
    
  
    lineBox = 7;
    
    cont.classList.remove('dnone')

    btn.disabled = true;
    
  }

  
  start(lineBox);   

});

 

function start(nBox) {
  
let allbox = Math.pow( nBox ,2 );
   
for(let i = 0; i < allbox; i++ ){

  let box = document.createElement('div')

  box.classList.add('box')

  box.innerText = i + 1;

  box.idBox = i + 1 ;

  box.style.width = size()

  box.style.height = size()

  cont.append(box)

  box.addEventListener('click',  clickBox );

}}

function size (){

  return `calc(100% / ${lineBox})`

}

function clickBox() {

  console.log('Hai cliccato', this.idBox);

  this.classList.add('blu')
  
}
