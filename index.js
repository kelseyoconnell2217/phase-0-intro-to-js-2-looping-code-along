function writeCards(names, event) {
    const messages = [] 
    for(let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`) 
    }
    return messages
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown() {
    let countDown = 10
    while(countDown >= 0) {
        console.log(countDown)
        countDown = countDown - 1
    }
}