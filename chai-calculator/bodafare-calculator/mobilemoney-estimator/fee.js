function estimateTransactionFee(){
    let amount= prompt("Unatuma Ngapi? (KES):")
    let amountToSend= Number(amount);
    console.log(amountToSend, "This is the value of amount to send")
    let fee= amountToSend * 0.015
    console.log(fee, "This is the value of Fee")
    if(fee <= 10){
        fee= 10
    }
    else if(fee >= 70){
        fee= 70
    }
    return fee;
}
let estimated_fee = estimateTransactionFee()
console.log("Estimated Fee is", estimated_fee)
console.log(`${estimated_fee} Send Money Securely! `)


// Global scope: Can be accessed everywhere. Defined outside a function.
// Local scope: Can be accessed inside the function. Defined inside a function.

