let contB = document.querySelector('.container')

let btn = document.getElementById('btn');


btn.addEventListener('click', function(){

contB.classList.remove('dnone')

})

let totSqu = 100;

generaquadrati(contB)


function generaquadrati(square){


    for(let i = 0; i < totSqu; i++){

    let box = document.createElement('div')

    box.classList.add('box')

    box.innerText = i + 1;

    square.append(box)
    
    box.idElement = i + 1;

    box.addEventListener('click', clickBox)
  }

}


function clickBox() {

  console.log('cliccato il',this.idElement);

  this.classList.add('blu')

}


