import React, { useReducer } from 'react';


const initialState = {
    timers :[],
    isOpen:true,
   
}
const timerReducer = (state, action)=>{
    switch(action.type){
        case "CREATE":
            state.timers.push({
                ...action.payload,
            })
           
            return{
                ...state,
                timers : [...state.timers],
                isOpen:true,
                
               
                
            }
           
        case "ADD":
            return{
                ...state,
                isOpen:false
            }
        case "CANCEL":
            return{
                ...state,
                isOpen:true
            }
        case "EDIT":
            const indexTimer = state.timers.findIndex(item => item.id === action.payload.id)
            state.timers[indexTimer]= action.payload
            
            
            return{
                ...state,
                
            } 
        case "DELETE":
            const newTimers = state.timers.filter(item => item.id !== action.payload)
            return{
                ...state,
                timers : [...newTimers],
                isOpen: true
            }
        case "START":
            const selectedTimer = state.timers.findIndex(item => item.id === action.payload)
            const now = Date.now()
            
            state.timers[selectedTimer]['runningSince'] = now
            state.timers[selectedTimer].isStart = false

            return{
                ...state,
               
            }
            case "STOP":
                const after = Date.now()
                const selectedTimerStop = state.timers.findIndex(item => item.id === action.payload)
                const lastElapsed = after - state.timers[selectedTimerStop].runningSince
                state.timers[selectedTimerStop].isStart = true
                state.timers[selectedTimerStop].elapsed += lastElapsed
                state.timers[selectedTimerStop].runningSince = null
              
                return{
                    ...state,
                }
        default:
            return state
    }

}

export const TimerContext = React.createContext()
const TimerContextProvider = (props) => {
    const[timer, dispatch] = useReducer(timerReducer,initialState)
    return (
       <TimerContext.Provider value={{timer,dispatch}}>
                {props.children}
       </TimerContext.Provider>
    );
};

export default TimerContextProvider;