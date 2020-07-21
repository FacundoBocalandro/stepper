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

export const checkFirstStepValidity = (firstStep, setFirstStep) => {
    const checkEmail = validateEmail(firstStep.email);
    const checkUsername = firstStep.username.length >= 4;
    const checkPass = firstStep.repeat === firstStep.password;
    if (checkEmail && checkUsername && checkPass) {
        setFirstStep({
            ...firstStep,
            isValid: true,
            error:
                {
                    hasError: false,
                },
        })
    } else {
        setFirstStep({
            ...firstStep,
            isValid: false,
            error: {
                hasError: true,
                emailError: !checkEmail,
                usernameError: !checkUsername,
                passwordError: !checkPass,
            },
        })
    }
}

const validateEmail = (mail) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};
