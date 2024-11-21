// problem 5

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

    const peopleAhead = serialNumber - 1;

    const waitingTime = peopleAhead * averageTime;

    // console.log(waitingTime);

    return waitingTime;
}

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10)); 
