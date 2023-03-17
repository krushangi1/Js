function isValidPassword(password,username){

    if( (password.length<8) || (password.indexOf(' ')!==-1) || (password.includes(username)!==-1) ){
        return false;
    }
    return true;
}