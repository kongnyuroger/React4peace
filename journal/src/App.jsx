import './App.css'
import profile1 from '../src/components/images/lulu.png'
import Journal from "./Journal";
import Header from "./assets/Header";
import Button from "./assets/Button";
import Counter from "./Counter";
import UserDetails from "./components/userDetails/UserDetails";
import UserDetails2 from './components/userDetails/userDetails2/UserDetails2';
import Form from './components/Form';

function App() {
  const users = [
    {
        name:'Mark',
        email: "Mark@nkr.com",
        dob: "02-07-1995",
        image :"images/profile2.jpg",
    },
    {
        name: 'calep',
        email: "calep@gknfrn.com",
        dob: "02-07-1985",
        image: "images/profile3.jpg"
    },
    {
      name:'Mark',
      email: "Mark@nkr.com",
      dob: "02-07-1995",
      image :"images/profile2.jpg",
    },
  ];
  return (
    <div>
      <Form />
      {
        users.map((user, key) => {
          return(
            <UserDetails2 
              key={key}
              name={user.name}
              email={user.email}
              dob={user.dob}
              image={user.image}
            />
          )
        })
      }
      {/*<Counter decrementText= 'Reduce' incrementText= "add" startValue = {10}/>
      <Header />
      <Journal text='hi you!'/>
      <h1>i am in app.js</h1>
      <Button text='click me' lapel='4'/>
      <Button text='get started' lapel='2'/>
  <Button/>*/}
    </div>
  )
}

export default App
