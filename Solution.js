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
function calcRate(rate) {
return rate = rate/1200;


}

//Step 3 - Calculate monthly payment - Amount times rate divided by the complicated math from the PDF Math.pow()
function calcPayment(loanAmount, calculatedRate, term) {

    return(amount*rate)/ (1-Math.pow(1+rate, -term));

}

//Step 3.5 - Calculate the interest rate based on the current balance in rate from step 2
//This function is called in Step 4, but you need to build it first
//Calculates interest per payment
function calcInterest(interestRate) {

    return balance * rate;
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

function buildSchedule({
    let loanAmount = Number(document.getElementById("lamount").value);
    let rate = parseFloat(document.getElementById("lrate").value);

    rate = calcRate(rate);

    //Assume monthly input
    let term = parseInt(document.getElementById("lterm").value);
    let payment = calcPayment(loanAmount, rate, term);
    let payments = getPayments(loanAmount, rate, term, payment);

    displayData(payments, loanAmount, payment);
})

//Build the amoritization schedule
function getPayments(amount, rate, term, payment){
    //set up an array to hold payments;
    let payments = [];

    //set up some variables to hold the value in the schedule

    let balance = amount;
    let totalInterest = 0;
    let monthlyPrincipal = 0;
    let monthlyInterest = 0;
    let monthlyTotalInterest = 0;

    //create a loop for each month of the loan term
    for (month = 1; month <= term; month++) {
        //Calculate the payment and interest
        monthlyInterest = caclInterest(balance, rate);
        totalInterest += monthlyInterest;
        monthlyPrincipal = payment - monthlyInterest;
        balance = balance - monthlyPrinciapl;

        //add the details to an object
        let curPayment = {
            month: month,
            payment: payment,
            principal: monthlyPrincipal,
            interest: monthlyInterest,
            totalInterest: totalInterest,
            balance: balance
        }
        payments.push(curPayment);
    }
}
function calcPaymentSchedule() {}

//Step 5 - Display all of the calculated information
//Use the template structure from FizzBuzz to output your data
function displayData(payments, loanAmount, payment) {
    //get the table we are going to add to.
    
}