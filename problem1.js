//problem 1

function calculateTax(income, expenses) {
    if(typeof income !== "number" || typeof expenses !== "number" || income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * (20 / 100);
    return tax;
}

// console.log(calculateTax(6000, -1500));