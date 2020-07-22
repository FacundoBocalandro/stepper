import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageUpload from "./second_step/ImageUpload";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import FirstStep from "../components/first-step/FirstStep";
// import {checkFirstStepValidity, constFirstStep} from "./components/first-step/utils";
import ThirdStep from "./third-step/ThirdStep";
import {constFirstStep, validateEmail} from "./first-step/utils";
import {checkFirstStepValidity, setFirstStep} from "../actions/RegisterActions";
// import {constFirstStep} from "./first-step/utils";


export default function Stepper(props) {

    const [firstStep, setFirstStep] = React.useState({
        email: '',
        username: '',
        password: '',
        repeat: '',
    })
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep label="First Step" onNext={() => checkFirstStepValidity(firstStep, props.setFirstStep)} errors={props.firstStep.error.hasError}>
                    <View>
                        <FirstStep firstStep={firstStep} setFirstStep={setFirstStep} error={props.firstStep.error}/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{alignItems: 'center'}}>
                        <ImageUpload selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View>
                        <ThirdStep/>
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


