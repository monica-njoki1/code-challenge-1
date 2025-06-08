function estimateTransactionFee(){
    let amount= prompt("Unatuma Ngapi? (KES):")
    let amountToSend= Number(amount);
    let fee= amount * 0.015;
    if(fee < 10){
        fee= 10
    }
    else if(fee > 70){
        fee= 70
    }
    return fee;
}
console.log("Total Deduction: 500 + ${fee} Send Money Securely! " )
console.log("Total Deduction: 2000 + ${fee} Send Money Securely! " )
console.log("Total Deduction: 10000 + ${fee} Send Money Securely! " )

