import React, { useContext, useEffect, useRef, useState } from 'react';
import { TimerContext } from '../context/timerContext';
import { v4 } from 'uuid';




const TimerCreate = (props) => {
    const{dispatch} = useContext(TimerContext)
    const [state,setState] = useState({
        id:v4(),
        title:'title',
        project:'project',
        elapsed:0,
        isStart:true,
        
    })
    const input = useRef()
    const onChangeHandler = (event) =>{
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    }
    useEffect(()=>{
            input.current.focus()
    },[])
  
    return (
      
            <div className="ui centered card">
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input ref={input} value={state.title} type="text" name="title" onChange={onChangeHandler} />
                        </div>  
                        <div className='field'>
                            <label>Project</label>
                            <input value={state.project} type="text" name="project" onChange={onChangeHandler} />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button' onClick={()=>dispatch({type:"CREATE",payload:state})}>Create</button>
                            <button className='ui basic red button' onClick={()=>dispatch({type:'CANCEL'})}>Cancel</button> 
                        </div>
                    
                       
                        
                    </div> 
                </div>  
            </div>
        
    );
};

export default TimerCreate;