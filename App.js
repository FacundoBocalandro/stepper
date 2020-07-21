import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageUpload from "./second_step/ImageUpload";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import FirstStep from "./first-step/FirstStep";
import {checkFirstStepValidity, constFirstStep} from "./first-step/utils";

export default function App() {

    const [firstStep, setFirstStep] = React.useState(constFirstStep)
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <View style={styles.container}>
            <ProgressSteps>
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
