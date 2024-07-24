import { useState } from 'react'
import Signup from './childcomponent/Signup'
import Login from './childcomponent/Login'
import OwnerSignup from './components/OwnerSignup'
import CustomerSignup from './components/CustomerSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1> Register Rooms</h1>
   <div>
   {/* <Signup/> */}
  {/* <Login/> */}
  {/* <OwnerSignup /> */}
  <CustomerSignup/>

  
   </div>
    </>
  )
}

export default App
