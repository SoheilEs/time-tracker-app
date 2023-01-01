import React from 'react';
import { useContext } from 'react';
import { TimerContext } from '../context/timerContext';

import TimerCreate from './TimerCreate';
import Timer from './Timer';

const TimerDashboard = (props) => {
    const {timer, dispatch} = useContext(TimerContext)
    return (
        
        <div className='ui three column centered grid"'>
            <div className='column'>
                {timer.timers.length > 0 ? timer.timers.map(item =>{ return( 
                
                    <Timer key={item.id} item={item}/> 
                
            
                ) 
        
              
                }):null}
            
                {timer.isOpen ? <div className='ui basic content center aligned segment'><button className='ui orange basic button icon' onClick={()=>dispatch({type:"ADD"})}><i className='plus icon' /></button></div>:<TimerCreate  />} 
            
            </div>  
        </div>
    );
};

export default TimerDashboard;