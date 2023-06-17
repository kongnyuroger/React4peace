import { useState } from "react";
import moment from 'moment';
function UserDetails2(props) {
    let {name, email, dob, image} = props;
    const [age, setAge] = useState(null);
    console.log('age is', age)
    function calcAge(){
        //setAge(22)
        let computedAge = moment(dob).diff(moment(), 'y');
        computedAge = moment().diff(dob, 'y')
        setAge(computedAge)
    }
    return(
        <div style={{
            textAlign: 'center',
            marginBottom: 30,
            borderWidth: 1,
            borderColor: 'red',
            borderStyle: 'solid',
            padding: 10,
            borderRadius: 5,

        }}>
            <img width= "300" src={image} />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>DOB{moment(dob).format('MMMM Do YYYY')}</p>
            <p>Age: {age ? age : 'pending age calculations'}</p>
            <button onClick={() => calcAge()}>
                calculate age
            </button>
        </div>
        
    )
}
export default UserDetails2