import { useState } from 'react';
import './UserDetail.css'
import defaultProfile from '../images/logo25.png'
function UserDetails(props){
    const [age, setAge] = useState('awaiting...')
    const [comment, setComment] = useState('')
    let yearOfBirth = props.yearOfBirth ? props.yearOfBirth : "year";
    let presentYear = props.presentYear ? props.presentYear : 2023;
    function calculateAge(){
        setAge(presentYear - yearOfBirth)
        setComment('you are  ')
    }
    return(
        <div className='user'>
            <img className="user__image"src={props.userImage ? props.userImage : defaultProfile} alt="" />
            <h3 className='user__name'>{props.userName? props.userName : "User name"}</h3>
            <p className='user__email'>{props.userEmail? props.userEmail : "user Email"}</p>
            <p className = "user__DOB">{props.userDateAndMonthOfBirth ? props.userDateAndMonthOfBirth : "Date, month, "}{yearOfBirth}</p>
            <p className= 'user__age'>{comment} {age}</p>
            <button onClick={() => calculateAge()} className='user__button'>calculate age</button>
        </div>
    )
}

export default UserDetails