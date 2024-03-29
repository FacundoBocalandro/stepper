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

export const validateEmail = (mail) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};
