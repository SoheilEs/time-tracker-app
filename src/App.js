import React from "react";
import TimerDashboard from "./components/TimerDashboard";
import TimerContextProvider from "./context/timerContext";
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
    
      <h1 className="ui dividing block header" style={{textAlign:"center"}}>Timers</h1>
       <TimerContextProvider>
          <TimerDashboard />
        </TimerContextProvider>
    
    </div>
  );
}

export default App;
