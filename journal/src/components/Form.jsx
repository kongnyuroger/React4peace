import { useState } from "react"
function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setdob] = useState('dob');
    const [image, setimage] = useState(null);
    function formSubmitted(event){
        event.preventDefault()
        const user = {
            name: name,
            email: email,
            dob: dob,
            image: image
        }

    }
    return(
        <form>
        <div onSubmit={formSubmitted}>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder='Name' 
                type='text'/>
        </div>
        <div>
            <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email'
            type='email'/>
        </div>
        <div>
            <input
                value={dob}
                onChange={(event) => setdob(event.target.value)}
                placeholder='DOB' 
                type='date'/>
        </div>
        <div>
            <input 
            onChange={(event) => setimage(event.target.files[0])}
            placeholder='image' 
            type='file'/>
        </div>
        <button>Add user</button>
      </form>
    )
}
export default Form