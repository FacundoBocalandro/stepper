import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageUpload from "./second_step/ImageUpload";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import FirstStep from "./first-step/FirstStep";
import {checkFirstStepValidity, constFirstStep} from "./first-step/utils";
import ThirdStep from "./third-step/ThirdStep";

export default function App() {

    const [firstStep, setFirstStep] = React.useState(constFirstStep)
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep label="Third Step">
                    <View>
                        <ThirdStep/>
                    </View>
                </ProgressStep>
                <ProgressStep label="First Step" onNext={() => checkFirstStepValidity(firstStep, setFirstStep)} errors={firstStep.error.hasError}>
                    <View>
                        <FirstStep firstStep={firstStep} setFirstStep={setFirstStep}/>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{alignItems: 'center'}}>
                        <ImageUpload selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
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
