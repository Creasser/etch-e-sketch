const container = document.querySelector('.gridContainer')
const btnBlack = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const btnErase = document.createElement('button')
const buttonsContainer = document.querySelector('.settings')

  function createDivs(col, rows) {
    for (let i = 0 ; i < (col * rows); i++){
        const div = document.createElement('div');
        //div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
  }

  createDivs(16,16)

  function blackColor () {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black' ;
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
  }
  blackColor()

  function eraser () {
    const boxs = container.querySelectorAll('.box')
    btnErase.textContent = 'Eraser'
    btnErase.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'lightgray' ;
        }))
    })
    buttonsContainer.appendChild(btnErase).classList.add('btn')
  }
  eraser()