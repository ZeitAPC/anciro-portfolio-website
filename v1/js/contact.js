const formID = document.getElementById("newsLetter");
const newsLetterCheckBox = document.getElementById("newsLetterCheckBox");
const submitButtonID = document.getElementById("submitFormButton");


formID.addEventListener("submit", formValidation);

function formValidation(e){
    e.preventDefault();
    let firstNameInput = document.forms["newsLetter"]["fName"].value.trim();
    let lastNameInput = document.forms["newsLetter"]["lName"].value.trim();
    let emailInput = document.forms["newsLetter"]["email"].value.trim();
    
    let allValidInputs = true;
    if (!firstNameInput){
        alert("First name cannot be empty.");
        allValidInputs = false;
    }
    if (!lastNameInput){
        alert("Last name cannot be empty.");
        allValidInputs = false;
    }
    if (!emailInput){
        alert("Email cannot be empty.");
        allValidInputs = false;
    }
    if (!newsLetterCheckBox.checked){
        alert("Check box needs to be checked");
        allValidInputs = false;
    }
    if (allValidInputs){
        alert("Form has been submitted")
        document.getElementById("submitFormButton").innerHTML = "Form Submitted."
    }
}