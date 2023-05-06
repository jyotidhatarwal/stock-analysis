const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const analysisButton = document.querySelector("#btn-analysis");
const outputMessage = document.querySelector("#output-message");

function calculateProfitAndLoss(initialValue,quantity,currentValue){
    var profit = Number.parseFloat((currentValue - initialValue)*quantity).toFixed(2);
    var profitPercentage = Number.parseFloat((profit/initialValue)*100).toFixed(2);
    var loss = Number.parseFloat((initialValue - currentValue)* quantity).toFixed(2);
    var lossPercentage = Number.parseFloat((loss/initialValue)*100).toFixed(2);
    
    if(initialValue > currentValue){
        showMessage(`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}% 🥲`,"red");
    }else if(initialValue < currentValue){
        showMessage(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}% 🥳`,"green");
    }else if(initialValue === 0 || currentValue === 0 || quantity === 0 ){
        showMessage("Please enter all the fields for analysis 🤪","Orange")
    }
    else{
        showMessage("No Pain No Gain!, No Gain No Pain 🙂","black")
    }
}

function clickHandler(){
    calculateProfitAndLoss(Number(initialPrice.value),Number(stockQuantity.value),Number(currentPrice.value));
}

function showMessage(message,color){
    outputMessage.style.display = "block";
    outputMessage.style.color = color;
    outputMessage.innerText = message;
}

analysisButton.addEventListener("click",clickHandler);