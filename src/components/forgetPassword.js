import React from 'react'

const ForgrtPassword = () => {
    return (
        <>
            <div className='loginpage'>
                <div className='login-outer-div'>
                    <div className='text-center'>
                        <a className='text-center' href='/'>
                            <img className='text-center mb-3' width={'100px'} src='https://seeklogo.com/images/A/ary-news-logo-F2E62D53D8-seeklogo.com.png' alt='' />
                        </a>
                        <h2 className='fw-bold'>
                            Recover Your Password
                        </h2>
                    </div>
                    <div className=''>
                        <form>
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" id="email" />
                                </div>
                                <div className='d-flex justify-content-end mb-3'>
                                    <div className=''>
                                        <a href='/login'>
                                            Do you have an account?
                                        </a>
                                    </div>

                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary w-50">Send</button>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgrtPassword
