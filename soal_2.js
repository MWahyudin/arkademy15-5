function isUsernameValid(uname) {
    let usernameRegex = /^([0-9])[a-z]{4,7}.*\1$/;


    return usernameRegex.test(uname);
}

function isPasswordValid(uname) {
    let passwordRegex = /^(?=.*-)\b(?=.*[a-z]{4})(?=.*[0-9]{4})\b.{7,11}$/
   
    return passwordRegex.test(uname);
}

//test
// isUsernameValid(("6andi7"));
// false
// isUsernameValid(("1brah1"));
// true