function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("SetUsername called");
}

function createUser(username, email, password){
    // SetUsername(username) // has only reference
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("allan", "allan@gmail.com", "12345")
console.log(chai);