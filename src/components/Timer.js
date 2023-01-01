import React, {useEffect, useState,useContext} from 'react';
import { TimerContext } from '../context/timerContext';
import { renderElapsedTime } from '../helpers/Helper';



const Timer = ({item}) => {
    const {dispatch} = useContext(TimerContext)
    const [value, setState] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const elapsedString = renderElapsedTime(item.elapsed, item.runningSince) 
    
    useEffect(()=>{
        const interval = setInterval(()=>setState(!value),100)
       
        return()=>{
            
            clearInterval(interval)
        }
    },[value]) 

    const changeHandler = (event) => {
        dispatch({
            type:'EDIT',
            payload:{
                ...item,
                [event.target.name]:event.target.value
            }
        })
    }
    return (
    <>
       {  isEditing ? 
      <div className="ui centered card">  
            <div className='content'>
                <div className='ui form'>
                    <div className='field'>
                        <label>Title</label>
                        <input  value={item.title} name="title" onChange={changeHandler} />
                    </div>
                    <div className='field'>
                        <label >Project</label>
                        <input value={item.project} name="project" onChange={changeHandler} />    
                    </div>
                    <div className="ui bottom attached buttons">
                        <button  className='ui basic blue button' onClick={()=>setIsEditing(false)}>save</button>
                    </div>
                </div>
            </div>
        </div> 
        :
        <div className="ui centered card"> 
            <div className='content'>    
                <div className='header'>
                    {item.title}
                </div>
                <div className='meta'>
                    {item.project}
                </div>
                <div className='center aligned description'>
                    <h2>
                        {elapsedString}
                    </h2>
                </div>
                <div className='extra content'>
                    <span className='right floated edit icon' onClick={()=>setIsEditing(true)}><i className='blue edit icon' /></span>
                    <span className='right floated trash icon' onClick={()=>dispatch({type:"DELETE",payload:item.id})}><i className='red trash icon' /></span>
                </div>
            </div>
            {item.isStart ? <div className='ui bottom attached green basic button' onClick={()=>dispatch({type:"START",payload:item.id})}>Start</div>
            :<div className='ui bottom attached red basic button' onClick={()=>dispatch({type:"STOP",payload:item.id})}>Stop</div>}
        </div>
        }
   
           
    
</>       
    );
};

export default Timer;