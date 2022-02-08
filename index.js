let messageEl = document.getElementById("message_el");

let sumEl = document.querySelector("#sum_el");

let cardsEl = document.querySelector("#card_el");

let i;


let firstcard = getRandomCard();//parseInt(prompt("Entert the firstcard value:")) ;                        

let secondcard = getRandomCard();//parseInt(prompt("Enter the secondcard value:"));

let sum = firstcard + secondcard ;
let cards = [firstcard , secondcard];

let isBlakjack = false;
let isAlive = true;
let message = "" ;

getRandomCard = () => {
    return(2)
}

startGame = (renderGame) => {
    cardsEl.textContent = "Cards:" + cards ;

    for(i=0; i<cards.lenght; i++){
        cardsEl.textContent += cards[i] + "";
    }
    sumEl.textContent = "Sum: " + sum;

    if(sum<21){
        message = "Your's are closer to the value 🙂 ";
    }
    else if(sum == 21){
        message = "You win 🥳 ";
        isBlakjack = true;
    }
    else{
        message = "you lose 😟 " ; 
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

newcard = () => {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
