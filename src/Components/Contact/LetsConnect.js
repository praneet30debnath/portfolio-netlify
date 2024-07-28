import React, { useEffect, useState } from "react";
import './LetsConnect.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const LetsConnect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="letsConnectParent">
            <div className="u-center-text u-margin-bottom-big3">
                <h2 className="heading-secondary-white">
                    GET IN TOUCH
                </h2>
            </div>
            <div className="u-center-text u-margin-bottom-big4">
                <h2 className="heading-tertiary-white">
                    Wanna grab a cup of coffee?
                </h2>
            </div>
            <div className="emailContentParent">
                {isMobile ? <div className="contactBox">

                    <div className="mailParent">
                        <FontAwesomeIcon icon={faEnvelope} className="envelope" style={{ color: 'white' }} />
                        <div className="mailTo">
                            <a href="mailto:praneet4career@gmail.com" className="contactDesc">praneet4career@gmail.com</a>
                        </div>
                    </div>

                    <div className="mailParent">
                        <FontAwesomeIcon icon={faLinkedinIn} className="linkedIn" style={{ color: "#ffffff" }} />
                        <div className="mailTo">
                            <a href="https://www.linkedin.com/in/praneet-debnath-b37a3219a/" target="_blank" rel="noreferrer" className="contactDesc">LinkedIn</a>
                        </div>
                    </div>

                    <div className="mailParent">
                        <FontAwesomeIcon icon={faGithub} className="linkedIn" style={{ color: "#ffffff" }} />
                        <div className="mailTo">
                            <a href="https://github.com/praneet30debnath" target="_blank" rel="noreferrer" className="contactDesc">GitHub</a>
                        </div>
                    </div>
                </div> : <div className="contactBox">

                    <FontAwesomeIcon icon={faEnvelope} className="envelope" style={{ color: 'white' }} />
                    <div className="mailTo">
                        <a href="mailto:praneet4career@gmail.com" className="contactDesc">praneet4career@gmail.com</a>
                    </div>

                    <FontAwesomeIcon icon={faLinkedinIn} className="linkedIn" style={{ color: "#ffffff" }} />
                    <div className="mailTo">
                        <a href="https://www.linkedin.com/in/praneet-debnath-b37a3219a/" target="_blank" rel="noreferrer" className="contactDesc">LinkedIn</a>
                    </div>

                    <FontAwesomeIcon icon={faGithub} className="linkedIn" style={{ color: "#ffffff" }} />
                    <div className="mailTo">
                        <a href="https://github.com/praneet30debnath" target="_blank" rel="noreferrer" className="contactDesc">GitHub</a>
                    </div>
                </div>}

                <div>
                    <h1 className="copyright">Copyright © 2024 Praneet Debnath. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    )
}

export default LetsConnect;