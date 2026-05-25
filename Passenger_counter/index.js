let count = 0

function increment(){
    count += 1
    console.log(count)
    document.getElementById("count-el").innerText = count
}

function reset(){
    count = 0
    document.getElementById("count-el").innerText = count
}

function save(){
    let saveCount = count + " - "
    document.getElementById("save-el").textContent += saveCount
    console.log(count)
    reset()
}

















// let countEL = document.getElementById("count-el")

// function beh(){
//     count = count + 1
//     countEL.innerText = count
//     console.log(count)
// }



// let message = "You have 3 new notifications"
// let username = 'aa'
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let name = "aa"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "aa"
// let greeting = "Welcome back, "
// welcomeEl.innerText = greeting + name + "!"

// welcomeEl.innerText += " 👋"