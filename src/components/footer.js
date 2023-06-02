import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <>
            <footer className='site-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className=''>
                                <a href="/">
                                    <img className='' width={'100px'} src='https://seeklogo.com/images/A/ary-news-logo-F2E62D53D8-seeklogo.com.png' alt='logo' />
                                </a>
                                <p className='mt-3 mb-4'>
                                    This pays especially well in technology, where you earn a premium for working fast.
                                </p>
                                <div className=''>
                                    <h3 className='mb-3 fw-bold'>Follow Us</h3>
                                    <div className='footer-social-icons'>
                                        <a href=''>
                                            <FacebookRoundedIcon className='me-3' />
                                        </a>
                                        <a href=''>
                                            <InstagramIcon className='me-3' />
                                        </a>
                                        <a href=''>
                                            <TwitterIcon className='me-3' />
                                        </a>
                                        <a href=''>
                                            <YouTubeIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className='footer-link-list d-flex justify-content-around'>
                                <div>
                                    <ul>
                                        <li>
                                            <a href=''>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                News
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                Blogs
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <a href=''>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                News
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                Blogs
                                            </a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <div className=''>
                                <h3 className='mb-4 fw-bold'>Newsletter</h3>
                                <div>
                                    <form>
                                        <div className="input-group mb-3">
                                            <input type="mail" className="form-control" placeholder="Jhon.doe@email.com" aria-label="Recipient's username" aria-describedby="newsletter"/>
                                                <span className="btn btn-primary" id="newsletter">
                                                    <button type='submit' className='bg-transparent border-0 text-white'>
                                                        <SendIcon/>
                                                    </button>
                                                </span>
                                        </div>
                                    </form>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut libero tellus. Duis congue, risus in aliquam euismod libero.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className=''>
                                <p>
                                    © 2023 ARY News, Inc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
