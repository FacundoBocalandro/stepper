import React from "react";

export const constFirstStep = {
    email: '',
    username: '',
    password: '',
    repeat: '',
    isValid: false,
    error: {
        hasError: false,
    },
};

// export const checkFirstStepValidity = (firstStep, setFirstStep) => {
//     const checkEmail = validateEmail(firstStep.email);
//     const checkUsername = firstStep.username.length >= 4;
//     const checkPassLength = firstStep.password.length >=4;
//     const checkEquals = firstStep.repeat === firstStep.password;
//     if (checkEmail && checkUsername && checkEquals) {
//         setFirstStep({
//             ...firstStep,
//             isValid: true,
//             error:
//                 {
//                     hasError: false,
//                 },
//         })
//     } else {
//         setFirstStep({
//             ...firstStep,
//             isValid: false,
//             error: {
//                 hasError: true,
//                 emailError: !checkEmail,
//                 usernameError: !checkUsername,
//                 passwordLength: !checkPassLength,
//                 passwordEquals: !checkEquals,
//             },
//         })
//     }
// }

export const validateEmail = (mail) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};
