import React from 'react'

const Login = () => {
    return (
        <>
            <div className='loginpage'>
                <div className='login-outer-div'>
                    <div className='text-center'>
                        <a className='text-center' href='/'>
                            <img className='text-center mb-3' width={'100px'} src='https://seeklogo.com/images/A/ary-news-logo-F2E62D53D8-seeklogo.com.png' alt='' />
                        </a>
                        <h2 className='fw-bold'>
                            Login Your Account
                        </h2>
                    </div>
                    <div className=''>
                        <form>
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" id="password" />
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className=''>
                                        <a href='/forget'>
                                            Forget your password?
                                        </a>
                                    </div>
                                    <div className=''>
                                        <a href='/signup'>
                                            Don't have an account?
                                        </a>
                                    </div>

                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary w-50">Login</button>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
