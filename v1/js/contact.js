const formID = document.getElementById("newsLetter");
const newsLetterCheckBox = document.getElementById("newsLetterCheckBox");
const submitButtonID = document.getElementById("submitFormButton");

const formValidation = (e) => {
    e.preventDefault();
    let firstNameInput = document.forms["newsLetter"]["fName"].value.trim();
    let lastNameInput = document.forms["newsLetter"]["lName"].value.trim();
    let emailInput = document.forms["newsLetter"]["email"].value.trim();

    const noFirstNameAlert = "First name cannot be empty.";
    const noLastNameAlert = "Last name cannot be empty.";
    const noEmailAlert = "Email cannot be empty.";
    const untickednewsLetterCheckBoxAlert = "Check box needs to be checked";
    const allValidInputsAlert = "Form has been submitted";

    let allValidInputs = true;
    if (!firstNameInput){
        alert(noFirstNameAlert);
        allValidInputs = false;
    }
    if (!lastNameInput){
        alert(noLastNameAlert);
        allValidInputs = false;
    }
    if (!emailInput){
        alert(noEmailAlert);
        allValidInputs = false;
    }
    if (!newsLetterCheckBox.checked){
        alert(untickednewsLetterCheckBoxAlert);
        allValidInputs = false;
    }
    if (allValidInputs){
        alert(allValidInputsAlert);
        submitButtonID.innerHTML = "Form Submitted."
    }
}

formID.addEventListener("submit", formValidation);

