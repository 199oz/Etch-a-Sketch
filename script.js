const body = document.querySelector('body')
const btn = document.querySelector('.reset')
const container = document.querySelector('.container')

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random number between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random number between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random number between 0 and 255
    return `rgb(${r}, ${g}, ${b})`; // Return the color in rgb format
  }


function displayConsole(number) {
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`

    container.innerHTML = ""
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const square = document.createElement('div')
            square.addEventListener('mouseover',() => {square.style.backgroundColor = getRandomColor()})
            container.appendChild(square)
        }
        
    }
    
}


btn.addEventListener('click',() => {
    let newSet = window.prompt('Choose a number from 10 - 100')

    if (newSet !== null) {
        const number = Number(newSet)

        if (!isNaN(number) && number > 10 && number < 100) {
            console.log(`User have entered the number ${number}`)
            displayConsole(number)
            
        }
        else{
            console.log('User failed to enter the correct number')
        }
        
    }
    else{
        console.log('User have canceled the prompt')
    }

    


}
)
