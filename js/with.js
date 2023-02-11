/*
1. add event hanlder with the withdraw btn
2. get the withdraw amount from the withdraw input field
2.5. also makesure to convert the input into a number using parseFloat
3.get previus withdraw Total
4. calculate total withdraw amount
4.5. Set total withdraw amount
5. get the previus balance total
6. calculate new balance total
6.5. set the new balance total
7.clear the input field
*/ 

// Step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withDrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString= withDrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step 3 :
    const withdrawTotalElemwnt = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElemwnt.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);
    
    // Step 4:
    const currentWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotalElemwnt.innerText = currentWithdrawTotal;

    // step 5: 
    const balanceTotalEelemnt = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalEelemnt.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceTotalString);
    console.log(previusBalanceTotal)

    if(newWithdrawAmount > previusBalanceTotal){
        alert('Baap er bank e eto Teka Paisa nai')
    }

    // step 6
    const newBalanceTotal = previusBalanceTotal - newWithdrawAmount;
    balanceTotalEelemnt.innerText = newBalanceTotal;

    // ster 7:
    withDrawField.value = '';
})