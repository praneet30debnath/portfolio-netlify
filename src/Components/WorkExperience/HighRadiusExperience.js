import React from "react";
import ReactDOM from "react-dom";
import { reduxActions } from "../../Redux/Store";
import { useDispatch } from "react-redux";

const HighRadiusExperience = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(reduxActions.setHighRadiusModalIsOpen({ value: false }));
    };

    const handleBackdropClick = (event) => {
        if (event.target.className === 'modal') {
            handleClose();
        }
    };

    const modalContent = (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modalContent-intern">
                <span className="closeButton" onClick={handleClose}>&times;</span>
                <div className="modalContent-parent">
                    <div className="modalContent-header">
                        <h2 className="modalContent-header-h2">HighRadius Technologies</h2>
                        <p className="modalContent-header-p">Jun 2021 - Dec 2024</p>
                    </div>

                    {/* Software Engineer I */}
                    <div className="modalContent-section">
                        <div className="modalContent-subheader">
                            <h3 className="modalContent-subheader-h3">Software Engineer I | Hyderabad - IN</h3>
                            <p className="modalContent-subheader-p">Jul 2024 - Dec 2024</p>
                        </div>
                        <div className="modalContent-bullets">
                            <ul>
                                <li className="modalContent-bullets-li">Designed and implemented <b>Redis Cache</b> to reduce DB hits for static and dynamic calls responsible for grid loading actions, bringing overall UI loading time from <b>60+ seconds to 5 seconds</b> as part of the <b>Net Product Score (NPS) enhancement initiative</b>.</li>
                                <li className="modalContent-bullets-li">Redesigned and optimized the <b>In-App Calling</b> feature using <b>ReactJS, Redux Toolkit, Saga, WebSocket, and Twilio</b>, resulting in improved system performance and enhanced user experience. Contributed to the <b>B2B (Back to Basics)</b> initiative, focusing on seamless integration and efficient API communication.</li>
                                <li className="modalContent-bullets-li">Designed and implemented the <b>Manage Business Hours</b> feature in the In-App Calling module, enabling clients to configure working hours for handling incoming calls. Enhanced functionality included <b>automated call disconnection or voicemail routing</b> improving operational flexibility and user experience.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Associate Software Engineer II */}
                    <div className="modalContent-section">
                        <div className="modalContent-subheader">
                            <h3 className="modalContent-subheader-h3">Associate Software Engineer II | Hyderabad - IN</h3>
                            <p className="modalContent-subheader-p">Jul 2023 - Jun 2024</p>
                        </div>
                        <div className="modalContent-bullets">
                            <ul>
                                <li className="modalContent-bullets-li">Improved UI performance through <b>root cause analysis (RCA)</b> to identify performance bottlenecks, leading to the design and implementation of solutions as part of the <b>Net Product Score (NPS) enhancement initiative</b>.</li>
                                <li className="modalContent-bullets-li"><b>Improved Cost of Goods Sold (COGS)</b> and <b>reduced cloud expenses</b> through the development of a streamlined framework to optimize Java class operations within <b>Kubernetes</b> infrastructure.</li>
                                <li className="modalContent-bullets-li"><b>Designed and developed a user-friendly interface</b> exclusively for the support team, facilitating efficient execution of workflow actions in <b>Argo</b> such as <b>retrying, retriggering, or terminating workflows</b>.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Associate Software Engineer I */}
                    <div className="modalContent-section">
                        <div className="modalContent-subheader">
                            <h3 className="modalContent-subheader-h3">Associate Software Engineer I | Hyderabad - IN</h3>
                            <p className="modalContent-subheader-p">Jul 2022 - Jun 2023</p>
                        </div>
                        <div className="modalContent-bullets">
                            <ul>
                                <li className="modalContent-bullets-li">Designed <b>reusable Java classes</b> to migrate <b>ETL</b> jobs to a Java-based codebase, applying <b>SOLID and OOP principles</b> with <b>multithreading</b> to improve job monitoring.</li>
                                <li className="modalContent-bullets-li"><b>Developed and rigorously tested</b> custom Java Methods tailored to meet the unique requirements of diverse clients, ensuring the delivery of robust and scalable software solutions.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Analytics Intern */}
                    <div className="modalContent-section">
                        <div className="modalContent-subheader">
                            <h3 className="modalContent-subheader-h3">Analytics Intern | Bhubaneshwar - IN</h3>
                            <p className="modalContent-subheader-p">Jun 2021 - Jun 2022</p>
                        </div>
                        <div className="modalContent-bullets">
                            <ul>
                                <li className="modalContent-bullets-li">Developed <b>reusable JavaScript (frontend) modules</b> proficient in processing <b>JSON data inputs</b> to dynamically render <b>vital dashboards</b> pivotal for <b>Account Receivables (AR)</b> analysis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.body
    );
}

export default HighRadiusExperience;
