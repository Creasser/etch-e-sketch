const container = document.querySelector('.gridContainer')
const btnBlack = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const btnErase = document.createElement('button')
const btnClear = document.createElement('button')
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

  function rgbColor () {
    const boxs = container.querySelectorAll('.box')
    btnRGB.textContent = 'Rainbow'
    btnRGB.addEventListener('click' , () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R}, ${G}, ${B})`
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
  }
  rgbColor()

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


function reSet () {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function reSize() {
    btnSize.textContent = 'Grid Size'
    btnSize.addEventListener('click', () => {
        let user = prompt('What size do you want the grid to be?')
        if(user === null || user < 1 || user > 100) {
            reSet()
            createDivs(16,16)
            blackColor()
            rgbColor()
            eraser()
            buttonsContainer.appendChild(btnSize).classList.add('btn')
        }
        else{
            reSet()
            createDivs(user, user)
            blackColor()
            rgbColor()
            eraser()
            buttonsContainer.appendChild(btnSize).classList.add('btn')
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()