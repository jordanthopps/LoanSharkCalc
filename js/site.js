//Mortgage Calculator
//Step 1 - Get User inputs - this will access the DOM and call all other functions
function getValues() {

    let loanAmount = 10
    let term = 10
    let interestRate = 10

    loanAmount = document.getElementById("loanAmount").value;

    term = document.getElementById("termLength").value;

    interestRate = document.getElementById("interestRate").value;

    let calculatedRate = calcRate(interestRate);

    let payment = calcPayment(loanAmount, calculatedRate, term);

    let totalPayments = calcPaymentSchedule(loanAmount, calculatedRate, term, payment);

    displayData(totalPayments);

}

//Step 2 - Calculate the interest rate - this is the division by 1200 equation from the PDF
function calcRate(interestRate) {

    ((loanAmount * interestRate) / 1200);

}

//Step 3 - Calculate monthly payment - Amount times rate divided by the complicated math from the PDF Math.pow()
function calcPayment(loanAmount, calculatedRate, term) {

    ((amountLoaned) * (interestRate / 1200)) / (1 - (1 + ((interestRate / 1200) ^ (termLength * -1))));

}

//Step 3.5 - Calculate the interest rate based on the current balance in rate from step 2
//This function is called in Step 4, but you need to build it first
//Calculates interest per payment
function calcInterest(interestRate) {
    let remainingBalance = (loanAmount - payment);
    let interestPay = (remainingBalance*interestRate)/1200
}

//Step 4 - Now that we know the rate and monthly payment we build out our payment schedule
//This is the big function of the application - create your object in this function
//let obj = {
//     month:
//     payment:
//     principal:
//     interest:
//     totalInterest:
//     balance:
// }
function calcPaymentSchedule() {}

//Step 5 - Display all of the calculated information
//Use the template structure from FizzBuzz to output your data
function displayData() {}