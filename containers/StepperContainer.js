import React from 'react';
import {connect} from "react-redux";
import {checkFirstStepValidity, setFirstStep} from "../actions/RegisterActions";
import Stepper from "../components/stepper";


const mapStateToProps = state => ({
    firstStep: state.registerReducer.firstStep,
    checking: state.registerReducer.checking,
})

const mapDispatchToProps = dispatch => {
    return {
        checkFirstStepValidity: firstStep => {
            dispatch(checkFirstStepValidity(firstStep))
        },
        setFirstStep: firstStep => {
            dispatch(setFirstStep(firstStep))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
