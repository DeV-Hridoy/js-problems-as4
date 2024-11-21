// problem 4

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


// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));