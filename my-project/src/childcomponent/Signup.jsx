import { Input, Button } from '@nextui-org/react';
import OwnerSignup from '../components/OwnerSignup';
import CustomerSignup from '../components/CustomerSignup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [Switch,setSwitch]=useState(false);
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 ">
      <div className="flex flex-row justify-between my-8 gap-12 cursor-pointer">
          <h3 className={`${Switch?'':"border-b-3 border-b-black"}`} onClick={()=>setSwitch(false)}>Customer</h3>
          <h3 className={`${!Switch?'':"border-b-3 border-b-black"}`} onClick={()=>setSwitch(true)}>OwnerSignup</h3>
        </div>
        {Switch?<OwnerSignup />:<CustomerSignup />}
        <div className='mb-8'>
          Already have an Account?
          <Link to='/login' className='text-blue-400'>Login</Link>
        </div>
    </div>
  );
};

export default Signup;