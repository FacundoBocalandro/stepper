import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageUpload from "./second_step/ImageUpload";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import FirstStep from "../containers/FirstStepContainer";
import ThirdStep from "./third-step/ThirdStep";


export default function Stepper(props) {

    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep label="First Step" onNext={() => props.checkFirstStepValidity(props.firstStep)} errors={props.firstStep.error.hasError}>
                    <View>
                        <FirstStep/>
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
        backgroundColor: "#112b4b"
    },
});


