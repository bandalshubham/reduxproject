import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
// import { password, username } from '../Redux/action';
import "./form.css";



const Form = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const Username = useSelector((state) => state.f_username);
    const dispatch = useDispatch();
    console.log(Username);



    return (
        <>
            <div className='form'>
                <form  >
                    <h1>Basic Form</h1>
                    <label  >username : </label>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} name='username' placeholder='username' />
                    <div className='form1'>
                        <label  >Password : </label>
                        <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} name='password' placeholder='password' />
                    </div>



                </form>

            </div>
            <button className='submit' onClick={() => dispatch({ type: 'USERNAME', payload: { username, password } })}>submit</button>
        </>
    )

}
export default connect()(Form);