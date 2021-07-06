document.getElementById('loan-form').addEventListener('submit', function(e){
  // hide the result
  document.getElementById('results').style.display = 'none';
  // show the loading 
  document.getElementById('loading').style.display = 'block';
  // set a time out
  setTimeout(CalculateLoan, 2000);

  e.preventDefault();
});

// calculate the loan 
function CalculateLoan(e){
 const amount =  document.getElementById('amount');
 const interest =  document.getElementById('interest');
 const years =  document.getElementById('years');
 const monthlyPayment = document.getElementById('monthly-payment');
 const totalPayment = document.getElementById('total-payment');
 const totalInterest = document.getElementById('total-interest');

 const principle = parseFloat(amount.value); 
 const calculatedInterest = parseFloat(interest.value) / 100 / 12; 
 const calculatedPayments = parseFloat(years.value) * 12; 

// compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principle*x*calculatedInterest)/ (x-1);

if(isFinite(monthly)){
   // show the result
   document.getElementById('results').style.display = 'block';
   // hide the loading 
   document.getElementById('loading').style.display = 'none';
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly*calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly*calculatedPayments)-principle).toFixed(2);

  setTimeout(clearText, 7000);
}else {
  showError("Please Check Your Numbers ");
}
 
  
}
// Show Error
function showError(error){
  // hide the result
  document.getElementById('results').style.display = 'none';
  // hide the loading 
  document.getElementById('loading').style.display = 'none';
  
  // create error div
  const errorDiv = document.createElement('div');
  // create Classes 
  errorDiv.className = 'alert alert-danger'
  // get elements 
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // create text node and append 
  errorDiv.appendChild(document.createTextNode(error));
  // insert the errorDiv before heading 
  card.insertBefore(errorDiv, heading);
  // set a time out 
  setTimeout(clearError, 3000);
}
// clear text
function clearText(){
  amount.value = '';
  interest.value = '';
  years.value = '';
}
// clear Error 
function clearError(){
  document.querySelector('.alert ').remove();
};






