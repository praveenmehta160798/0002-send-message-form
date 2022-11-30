
const form = document.forms['form'];
const fname = document.forms['form']['name'];
const email = document.forms['form']['email'];
const phone = document.forms['form']['phone'];
const subject = document.forms['form']['subject'];
const msg = document.forms['form']['msg'];

function setError(element, errorMsg) {
    const formControl = element.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("span").innerText = errorMsg;
}
function setSuccess(element){
    const formControl = element.parentElement;
    formControl.className = "form-control success";
}
function validateForm() {
    const returnValue = true;
    const nameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const subjectValue = subject.value.trim();



    isNameValid = /^[^ \.][a-zA-Z \.]{0,30}$/;
    isEmailValid = /^[a-zA-Z][\w\.\_\-]{2,30}[^\.\_\-][@][a-z]{2,10}[\.][a-z]{2,3}$/;
    isPhoneValid = /^[7,8,9][0-9]{9}$/;
    isSubjectValid = /^[a-zA-Z0-9 ]{10,50}$/;


    if (nameValue.length == 0) {
        setError(fname, "*Name cannot be blank");
    } else if (nameValue.length <= 2) {
        setError(fname, "*Enter a valid name");
    } else if(isNameValid.test(nameValue)){
        setSuccess(fname);
    } else{
        setError(fname, "*You can't use special character or a number in name");
    }
    
    
    if (emailValue.length == 0) {
        setError(email, "*Email cannot be blank");
    } else if (nameValue.length <= 2) {
        setError(email, "*Enter a valid email");
    } else if(isEmailValid.test(emailValue)){
        setSuccess(email);
    } else{
        setError(email, "*Enter a valid email");
    }


    if (phoneValue.length == 0) {
        setError(phone, "*Phone cannot be blank");
    } else if (phoneValue.length <= 2) {
        setError(phone, "*Enter a valid phone number");
    } else if(isPhoneValid.test(phoneValue)){
        setSuccess(phone);
    } else{
        setError(phone, "*Enter a valid phone number");
    }
    
    
    if (subjectValue.length == 0) {
        setError(subject, "*Subject cannot be blank");
    } else if (subjectValue.length <= 5) {
        setError(subject, "*Subject must be more than 5 alphabets");
    } else if(isSubjectValid.test(subjectValue)){
        setSuccess(subject);
    } else{
        setError(subject, "*You cannot use special characters in subject");
    }

    
    return false;
    return returnValue;
}


// var testname = "Praveen Mehta.";
// var reg1 = /^[a-zA-Z .]{0,30}$/; //for name
// console.log(reg1.test(testname));

// var testemail = "praveenmehta160798@gmail.com";
// var reg2 = /^[a-zA-Z][\w\.\_\-]{2,30}[^\.\_\-][@][a-z]{2,10}[\.][a-z]{2,3}$/;
// console.log(reg2.test(testemail));

// var testphone = "7971779502";
// var reg3 = /^[7,8,9][0-9]{9}$/;
// console.log(reg3.test(testphone));

// var testsubject = "For web designing";
// var reg4 = /^[a-zA-Z0-9 ]{10,50}$/;
// console.log(reg4.test(testsubject));
