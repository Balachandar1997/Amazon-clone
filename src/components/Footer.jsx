import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-clean">
    <footer>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li>Web design</li>
                        <li>Development</li>
                        <li>Hosting</li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li>Company</li>
                        <li>Team</li>
                        <li>Legacy</li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li>Job openings</li>
                        <li>Employee success</li>
                        <li>Benefits</li>
                    </ul>
                </div>
                <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
                    <p className="copyright">Amazon © 2023</p>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer