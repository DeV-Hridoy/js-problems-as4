// problem 2

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

// console.log(sendNotification("nadim.naem5@outlook.com"));
