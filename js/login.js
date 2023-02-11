// Step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input field 
    // always remember to use .value to get text from an input field
    const emailField =  document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    // 3.a :set id on the html element
    // 3.b: get the value from the element
    const passField = document.getElementById('user-password');
    const password = passField.value;
    
    // Danger: Do not verify email password on the client side
    // Step 4: Verify email and password and check wheter valid user or not
    if(email === 'mehetajkhandaker@gmail.com' && password === 'sonarbangla'){
        window.location.href = 'bank.html'
    } else{
        alert('toke ami teijjo sontan ghoshona korlam. tui password vule gesos!!')
    }
})