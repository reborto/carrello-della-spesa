//indica che cart è un array vuoto//
const cart = [];

function carrello(){
    let input = prompt ('metti qualcosa nel carrello')
    //if condizione di partenza se prompt vuoto//
    if (input==null || input==false) {
       alert ('il tuo carrello è vuoto!');
    }
    else {
        for (let index = 0; index < cart.length; index++) { ////
            const elementCart = cart[index];
            if (elementCart==input){
                alert ('è già presente nel tuo carrello!')
            }
            
        }
        cart.push(input) //aggiunge elementi nell'array cart//
        console.log(cart) //stampa//
    }
}

/*
for( let elementCart in cart ) {
	if(elementCart == input) {
	alert('elemento già presente nel carrello')}
}*/