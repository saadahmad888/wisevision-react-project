import React from 'react'

const NewPassword = () => {
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
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label for="confirm-password" className="form-label">Confirm Password</label>
                                    <input type="password" name='confirm-password' className="form-control" id="confirm-password" />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary w-50">Update</button>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPassword
