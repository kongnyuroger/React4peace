import { useState } from "react";
function Counter(props) {
    const [count, setCount] = useState(props.startValue)
    function increment(){
        setCount(count+1)
        // alert("am Incrementing")
    }
    function decrement(){
        if(count <= 0){
            setCount(0)
        }else{
            setCount(count-1)
        }
        //alert("am decrementing")
    }

    return (
        <div>
            <button onClick = {() => decrement()}>{props.decrementText}</button>
            <span>{count}</span>
            <button onClick = {() => increment()}>{props.incrementText}</button>
        </div>
    )
}
export default Counter;