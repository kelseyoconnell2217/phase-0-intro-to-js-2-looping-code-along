function writeCards(names, event){
    const cards = []
    for(let i = 0; i < names.length; i++){
       cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
} 
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(x){
    while (x>=0){
        console.log(x);
        x = x-1
    }
}