// Function to toggle payment options (credit card, billing)
let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');


// Functions for handling tab selection and visibility

function doFun(){
    // Set credit card tab as active
 tColorA.style.color = "greenyellow";
 tColorB.style.color = "#444";
 tColorC.style.color = "#444";
 iconA.style.color = "greenyellow";
 iconB.style.color = "#aaa";
 iconC.style.color = "#aaa";
 cDetails.style.display = "block";
}
function doFunA(){
    // Set billing address tab as active (similar logic)
 tColorA.style.color = "#444";
 tColorB.style.color = "greenyellow";
 tColorC.style.color = "#444";
 iconA.style.color = "#aaa";
 iconB.style.color = "greenyellow";
 iconC.style.color = "#aaa";
 cDetails.style.display = "none";
}
function doFunB(){
// Set wallet tab as active (similar logic)
 tColorA.style.color = "#444";
 tColorB.style.color = "#444";
 tColorC.style.color = "greenyellow";
 iconA.style.color = "#aaa";
 iconB.style.color = "#aaa";
 iconC.style.color = "greenyellow";
 cDetails.style.display = "none";
 // Hide credit card details section
}
// Credit Card Number Formatting
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e){
 let num = cNumber.value;

// Remove spaces and format with spaces every 4 digits
 let newValue = '';
 num = num.replace(/\s/g, '');
 for(var i = 0; i < num.length; i++) {
  if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
  newValue = newValue.concat(num[i]);
  cNumber.value = newValue;// Update input value
 }

// Credit card number validation (basic check for length only)
 let ccNum = document.getElementById('c-number');
 if(num.length<16){
  ccNum.style.border="1px solid red";
 }else{
  ccNum.style.border="1px solid greenyellow";
 }
});

// Expiry Date Formatting
let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function( e ){


 let newInput = eDate.value;

// Add a '/' after the second character if not backspace and length is 2
 if(e.which !== 8) {
  var numChars = e.target.value.length;
  if(numChars == 2){
   var thisVal = e.target.value;
   thisVal += '/';
   e.target.value = thisVal;
   console.log(thisVal.length)
  }
 }
 // Set red border for invalid expiry date (less than 5 characters) and green for valid (length >= 5)

 if(newInput.length<5){
  eDate.style.border="1px solid red";
 }else{
  eDate.style.border="1px solid greenyellow";
 }
});

// CVV Length Validation
let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){


 let elen = cvv.value;
 let cvvBox = document.getElementById('cvv-box');
 if(elen.length<3){
  cvvBox.style.border="1px solid red";
 }else{
  cvvBox.style.border="1px solid greenyellow";
 }
})