import React from 'react'
import { Link } from 'react-router-dom';

const InfoBar = () => {
    return (



        // < !--Third part for information bar-- >
        <footer>
            {/* <!-- Login Signup button for users --> */}
            <div className="user-credential">
                <Link to="/signin" className="log-btn">
                    <button>
                        Login
                </button>
                </Link>
                <Link to="/signup" className="log-btn">
                    <button>
                        Signup
                </button>
                </Link>

            </div>
            {/* <!-- Login Signup button for users --> */}

            {/* <!-- other information related to website --> */}
            <div className="bio">
                <div className="credentialhash">
                    <p>@Harshuuu_18</p>
                </div>
                <div className="info">
                    "Yes! I'have got a match"
        </div>
            </div>
            <div className="tutorial">
                <h2>Step-1</h2>
                <h3>Create your Account</h3>
            </div>
            <div className="tutorial">
                <h2>Step-2</h2>
                <h3>Make Your Profile More Attractive</h3>
            </div>
            <div className="tutorial">
                <h2>Congrats!</h2>
                <h3>You're All Set for Dating</h3>
            </div>
            <div className="about-section">
                <h5>All Right Reserved to @Harshuuu_18</h5>
                <p>Hey there! I have made this website for Engage something New in Your life and First of All It's Free for Everyone. So Create Your Free Account Now and let the Party Beging! </p>
            </div>
            {/* <!-- other information related to website --> */}


        </footer >
        // <!--Third part for information bar-- >



    )
}

export default InfoBar;