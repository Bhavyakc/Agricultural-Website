// const form = document.getElementById('registration-form');
// const name = document.getElementById('full-name');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const confirm = document.getElementById('confirm-password');
// const mobile = document.getElementById('mobile-number');
// const marks10 = document.getElementById('10-marks');
// const marks12 = document.getElementById('12-marks');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     checkInputs();
// });

// function checkInputs() {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const confirmValue = confirm.value.trim();
//     const mobileValue = mobile.value.trim();
//     const marks10Value = marks10.value.trim();
//     const marks12Value = marks12.value.trim();

//     if (nameValue === '') {
//         setErrorFor(name, 'Name cannot be blank');
//     } else {
//         setSuccessFor(name);
//     }

//     if (emailValue === '') {
//         setErrorFor(email, 'Email cannot be blank');
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Email is not valid');
//     } else {
//         setSuccessFor(email);
//     }

//     if (passwordValue === '') {
//         setErrorFor(password, 'Password cannot be blank');
//     } else if (passwordValue.length < 8) {
//         setErrorFor(password, 'Password must be at least 8 characters');
//     } else {
//         setSuccessFor(password);
//     }

//     if (confirmValue === '') {
//         setErrorFor(confirm, 'Confirm password cannot be blank');
//     } else if (passwordValue !== confirmValue) {
//         setErrorFor(confirm, 'Passwords do not match');
//     } else {
//         setSuccessFor(confirm);
//     }

//     if (mobileValue === '') {
//         setErrorFor(mobile, 'Mobile number cannot be blank');
//     } else if (!isMobile(mobileValue)) {
//         setErrorFor(mobile, 'Mobile number is not valid');
//     } else {
//         setSuccessFor(mobile);
//     }

//     if (marks10Value === '') {
//         setErrorFor(marks10, '10 Marks cannot be blank');
//     } else {
//         setSuccessFor(marks10);
//     }

//     if (marks12Value === '') {
//         setErrorFor(marks12, '12 Marks cannot be blank');
//     } else {
//         setSuccessFor(marks12);
//     }
// }

// function setErrorFor(input, message) {
//     const formGroup = input.parentElement;
//     const errorMessage = formGroup.querySelector('.error-message');
//     errorMessage.innerText = message;
//     formGroup.classList.add('error');
//     formGroup.classList.remove('success');
// }

// function setSuccessFor(input) {
//     const formGroup = input.parentElement;
//     formGroup.classList.add('success');
//     formGroup.classList.remove('error');
// }

// function isEmail(email) {
//     const re = "/^  [^\s@]   +@[^\s@]    +\.[^\s@] $/";
//     return re.test(email);
// }

// function isMobile(mobile) {
//     const re = /^[0-9]{10}$/;
//     return re.test(mobile);
// }
