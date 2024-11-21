

function calculateTax(income, expenses) {
    if(typeof income !== "number" || typeof expenses !== "number" || income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * (20 / 100);
    return tax;
}



function sendNotification(email) {

    if (typeof email !== 'string' || email.split('@').length !== 2) {
        return "Invalid Email";
    }

    const parts = email.split('@');
    const username = parts[0];     
    const domain = parts[1];       

    if (!username || !domain) {
        return "Invalid Email";
    }
    return  username + " sent you an email from " + domain;
}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {

        if (name[i] >= '0' && name[i] <= '9')
        {
            return true; 
        }
        else{
            return false;
        }
    }
}



function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    const name = obj.name;
    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    const isFFamily = obj.isFFamily;

    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') 
    {
        return "Invalid Input";
    }

    if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30)
    {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;
    // console.log(finalScore);

    if (isFFamily === true)
    {
        finalScore = finalScore + 20;
    }


    if (finalScore >= 80)
    {
        return true;
    } 
    else 
    {
        return false; 
    }

}




function waitingTime(waitingTimes ,serialNumber) {

    if (serialNumber > waitingTimes.length) {
        return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum = sum + waitingTimes[i];
        // console.log(sum)
    }
   
    // const averageTime = sum / waitingTimes.length; 

    const averageTime = Math.round(sum / waitingTimes.length); 

    // console.log(averageTime)
    // const waitingTime = serialNumber * averageTime;

    const peopleInfornt = serialNumber - 1;

    const waitingTime = peopleInfornt * averageTime;

    // console.log(waitingTime);

    return waitingTime;
}

