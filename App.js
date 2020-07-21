import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageUpload from "./second_step/ImageUpload";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import FirstStep from "./first-step/FirstStep";

export default function App() {

    const [firstStep, setFirstStep] = React.useState({
        email: '',
        username: '',
        password: '',
        repeat: '',
        isValid: false,
        error: {
            hasError: false,
        },
    })

    const validateEmail = (mail) => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    const checkFirstStepValidity = () => {
        const checkEmail = validateEmail(firstStep.email);
        const checkUsername = firstStep.username.length >= 4;
        const checkPass = firstStep.repeat === firstStep.password;
        if (checkEmail && checkUsername && checkPass){
            setFirstStep({
                ...firstStep,
                isValid: true,
                error:
                    {
                        hasError: false,
                    },
            })
        }else {
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

    return (
        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep label="First Step" onNext={checkFirstStepValidity} errors={firstStep.error.hasError}>
                    <View>
                        <FirstStep firstStep={firstStep} setFirstStep={setFirstStep}/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View>
                      <ImageUpload/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 10,
    },
});
