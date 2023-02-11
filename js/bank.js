// Step 1: add event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click',function(){
    // Step 2: get the deposit amount from the deposit input field
    // for input field use .value to the valur inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
//    step 3: get the current deposit total amount
// for non-input(element other than input, textarea) use innerText to get the text
const depositTotalElement = document.getElementById('deposit-total');
const previusDepositTotalString = depositTotalElement.innerText;
const previusDepositTotal = parseFloat(previusDepositTotalString)
const currentDepositTotal = previusDepositTotal + newDepositAmount;
depositTotalElement.innerText = currentDepositTotal;


// step-5: get balance current total
const balanceTotalEelemnt = document.getElementById('balance-total');
const previusBalanceTotalString = balanceTotalEelemnt.innerText;
const previusBalanceTotal = parseFloat(previusBalanceTotalString);
// Step-6: calculate current total balance

const curentBalanceTotal = previusBalanceTotal + newDepositAmount;

// set the balance total
balanceTotalEelemnt.innerText = curentBalanceTotal;



// step-7 : clear the deposit field
depositField.value='';
})