function welcome(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;

    function displayFullname(){
        alert("welcome " + fullName + "!");
    }
    displayFullname()
}
welcome('Holberton', 'School')
