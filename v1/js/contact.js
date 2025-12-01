function validateForm(){
    let fNameInput = document.forms["newsLetter"]["fName"].value;
    let lNameInput = document.forms["newsLetter"]["lName"].value;
    let emailInput = document.forms["newsLetter"]["email"].value;

    if (!fNameInput.trim()){
        alert("Enter a first name");
        return false;
    }
    if (!lNameInput.trim()){
        alert("Enter a last name");
        return false;
    }
    if (!emailInput.trim()){
        alert("Enter your email");
        return false;
    }
    return true;
}

document.getElementById("newsLetter").addEventListener("submit", formSubmissionAlert)
function formSubmissionAlert(e){
    e.preventDefault();
    let inputIsValid = validateForm();
    if (inputIsValid){
        document.getElementById("submitFormButton").innerHTML = "Sent";
        alert("Form has been submitted");
        e.target.submit();
    }
}   

