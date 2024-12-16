import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { login } from '../state/UserSlice';
const Login = () => {
    const [showpassword, setShowpassword] = useState(false)
    const dispatch = useDispatch();
    const abc = `${process.env.REACT_APP_API_URL}`
    console.log(abc);
    const handleSubmit = (value) => {
        console.log(value)
        dispatch(
            login({
                email: value.email,
                password: value.password,
                showpassword: value.showpassword,
                loggedIn: true
            })
        )
    }

    // const handleshowPassword=()=>{
    //     dispatch()
    // }
    return (
        <div className='app'>
            <div className='top'>
                <img className='image' src="https://i.pinimg.com/originals/d2/5d/45/d25d451f6bc7da857f60bce9a4c161ea.gif" alt="Loading..." />
                <h5 className='heading'>Cat Lover's</h5>
            </div>
            <div className='form'>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={handleSubmit}>
                    {/* {({value}) => ( */}
                    <Form >
                        <h2 className="login" style={{ opacity: "1" }}>Login Here</h2>
                        <div className='label'>
                            <label className='label1'>Username: </label>
                            <Field
                                type="Username"
                                name="email"
                                placeholder="Enter your Email"
                                className="field"
                            />
                        </div>
                        <div>
                            <label className='label2'>Password: </label>
                            <Field
                                type={showpassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your Password"
                                className="field1"
                            />
                        </div>
                        <div className="passwordfield">
                                <label className="label3">
                                    <input
                                        type="checkbox"
                                        checked={showpassword}
                                        onChange={() => setShowpassword((prev) => !prev)}
                                        className="inputfield" />
                                    Show Password
                                </label>
                            </div>
                        <div>
                            <button type="submit" className="button" >
                                Submit
                            </button>
                        </div>
                    </Form>
                    {/* )} */}
                </Formik>
            </div>
        </div>
    );
};
export default Login;