export const renderElapsedTime = (elapsed, runningSince)=>{
  
    let totalElapsed = elapsed
    if(runningSince){
        totalElapsed += Date.now() - runningSince
    } 
    
    return milisecondToHumanize(totalElapsed)
}
const milisecondToHumanize= (ms) => {
    const second = Math.floor((ms/1000)%60)
    const minutes = Math.floor((ms/1000/60)%60)
    const hours = Math.floor(ms/1000/60/60)
    const humanize = [
        pad(hours.toString(),2),
        pad(minutes.toString(),2),
        pad(second.toString(),2)
    ].join(':')
    
    return humanize
}
const pad = (numberString, size) =>{
    let padded = numberString
    while(padded.length < size){
        padded = `0${padded}`
    }
    return padded
}
