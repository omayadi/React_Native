


let count = 0
let countEl = document.getElementById("count-el")


function increment() {
    count += 1
    countEl.textContent = count
}



let saveEl = 0
saveEl = document.getElementById("save-el")
function save() {
    
    saveEl.textContent += count + " - "
    console.log(saveEl.textContent)
    count = 0
    countEl.textContent = 0
    //we changet innerText by textContent to print the second space
    
}


let welcomeEl = document.getElementById("welcome-el")
let user = "Omar A."
let greetings = "Welcome to my first Javascript application! "
let message = greetings + user + "  👋"
welcomeEl.textContent = message

