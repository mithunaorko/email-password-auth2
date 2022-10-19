/* eslint-disable no-unused-vars */
import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';


const auth = getAuth(app)
function App() {

  const handleRegister = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  }

  const handleEmailblur = e => {
    console.log(e.target.value)
  }

  const handlePasswordBlur = e => {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input onBlur={handleEmailblur} type="email" name="email" id="" placeholder='Your Email' />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Passeord' />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
