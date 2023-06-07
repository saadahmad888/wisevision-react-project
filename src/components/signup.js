import React from 'react'

const Signup = () => {
    return (
        <>
            <div className='loginpage'>
                <div className='login-outer-div'>
                    <div className='text-center'>
                        <a className='text-center' href='/'>
                            <img className='text-center mb-3' width={'100px'} src='https://seeklogo.com/images/A/ary-news-logo-F2E62D53D8-seeklogo.com.png' alt='' />
                        </a>
                        <h2 className='fw-bold'>
                            Create Your Account 
                        </h2>
                    </div>
                    <div className=''>
                            <form>
                                <form>
                                <div className="mb-3">
                                        <label for="fname" className="form-label">First Name</label>
                                        <input type="text" name='fname' className="form-control" id="fname"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="lname" className="form-label">Last Name</label>
                                        <input type="text" name='lanme' className="form-control" id="lname"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" name='email' className="form-control" id="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" name='password' className="form-control" id="password"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="confirm-password" className="form-label">Confirm Password</label>
                                        <input type="password" name='confirm-password' className="form-control" id="confirm-password"/>
                                    </div>
                                    <div className='d-flex justify-content-end mb-3'>
                                    <div className=''>
                                        <a href='/login'>
                                            Already have an account?
                                        </a>
                                    </div>

                                </div>
                                    <div className='text-center'>
                                        <button type="submit" className="btn btn-primary w-50">Signup</button>
                                    </div>
                                </form>
                            </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Signup
