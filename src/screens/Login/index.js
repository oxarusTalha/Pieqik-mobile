import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import RegisterScreen from "./components/RegisterScreen";
import PhoneNumber from "./components/PhoneNumber";

export default function LoginScreen({ navigation }) {
    const [step,setStep] = useState(0)

    const handleStepIncrease = () => {
        setStep(prevStep => prevStep + 1);
    };
    const handleStepReduce = () => {
      setStep(prevStep => prevStep - 1);
  };
    const handlePressCross = () => {
      setStep(0);
  };

  return (
    <>
        {step == 0 ?( 
           <HomeScreen onPressIncrease={handleStepIncrease}/>
        ):step == 1 ?(
            <PhoneNumber onPressIncrease={handleStepIncrease} onPressReduce={handleStepReduce} pressCross={handlePressCross}/>
        ):step == 2 ?( 
            <RegisterScreen/> 
        ):null}
     
    </>
  );
}

LoginScreen.navigationOptions = {
    headerShown: false, 
  };