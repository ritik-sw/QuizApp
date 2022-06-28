import React, { useState } from "react";
import { data } from "./data";
import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";
import ResultScreen from "./ResultScreen";
import { ImageBackground } from "react-native";
import avenger from './avg.jpg'

const QuizScreen = () => {
  
  const [result,SetResult]=useState(0)
  const[showResultScreen, setShowScreen] = useState(false);
  
  const restartHandler=()=>
  {
    SetResult(0)
    setShowScreen(false)
  }
   
  if(showResultScreen)
   return(
    <ResultScreen res={result} restart={restartHandler} />
   )



  return (
    

    <ImageBackground source={avenger} style={{flex:1}}>
    <QuizeSingleChoice
      containerStyle={{ backgroundColor: "#61dafb", paddingTop: 30 }}
      questionTitleStyle={{ fontSize: 22, color: "black" }}
      responseStyle={{
        borderRadius: 15,
      }}
      responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
      selectedResponseStyle={{
        borderRadius: 15,
        backgroundColor: "purple",
      }}
      selectedResponseTextStyle={{
        fontSize: 14,
        fontWeight: "normal",
      }}
      responseRequired={true}
      nextButtonText={"Next"}
      nextButtonStyle={{ backgroundColor: "#06d755" }}
      nextButtonTextStyle={{ color: "#FFF" }}
      prevButtonText={"Prev"}
      prevButtonStyle={{ backgroundColor: "#fa5541" }}
      prevButtonTextStyle={{ color: "#FFF" }}
      endButtonText={"Done"}
      endButtonStyle={{ backgroundColor: "#000" }}
      endButtonTextStyle={{ color: "#FFF" }}
      buttonsContainerStyle={{ marginTop: "auto" }}
      onEnd={async(results) => {
        let n=0;
         await results.map((item)=>
         {
          console.log(item);
         if( item.isRight==true )
          n=n+1;
         }
         );
          SetResult(n);
         setShowScreen(true);

      }}
      data={data}
    />
    </ImageBackground>
  );
};

export default QuizScreen;