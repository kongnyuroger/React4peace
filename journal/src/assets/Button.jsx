
function Button (props){
    function handleClick(){
        alert('you clicked me');
    }
    return(
        <div>
            <button onClick={() => handleClick()}>
                {props.text} {props.lapel ? props.lapel : "not labeled"}
            </button>
        </div>
    )
}
export default Button