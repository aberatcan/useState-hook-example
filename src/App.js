import React,{useState} from 'react'
import './App.css';
import EmotionImage from './EmotionImage'

function App() { 
  /*
    useState() hook returns an array. First element of array is state of the component.
    Second one is a function that can change the state of the component
    Argument of useState() is initial state of the component.
  */
  const [emotion,setEmotion] = useState("happy")
  /* 
    in above, this type of statement is called array destructor. First element inside the 
    square brackets is first variable name of the returned array.(emotion="happy"). it will goes other
    elements of the returned array with comma for each element.
  */

  
  return (
    <div className="App">
      <EmotionImage imageFor={emotion}/>
      <h1>Current Emotion is {emotion}.</h1>
      <button className = "button-happy" onClick={() => setEmotion("happy")}>Happy</button>
      <button className = "button-frustrate" onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button className = "button-enthuse"onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </div>
  );
}

export default App;
