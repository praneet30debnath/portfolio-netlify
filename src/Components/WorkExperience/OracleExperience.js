import React from "react";
import ReactDOM from "react-dom";
import { reduxActions } from "../../Redux/Store";
import { useDispatch } from "react-redux";

const OracleExperience = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(reduxActions.setOracleModalIsOpen({ value: false }));
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
                        <h2 className="modalContent-header-h2">Oracle</h2>
                        <p className="modalContent-header-p">Jan 2025 - Present</p>
                    </div>

                    {/* Member of Technical Staff - IC2 */}
                    <div className="modalContent-section">
                        <div className="modalContent-subheader">
                            <h3 className="modalContent-subheader-h3">Member of Technical Staff - IC2 | Hyderabad - IN</h3>
                            <p className="modalContent-subheader-p">Jan 2025 - Present</p>
                        </div>
                        <div className="modalContent-bullets">
                            <ul>
                                <li className="modalContent-bullets-li"><b>Development and Implementation of a Robust Datafix Model:</b> Designed and deployed a comprehensive Datafix framework for production environments, incorporating detailed logging and auditing mechanisms. Utilized <b>Python and Java</b> to generate a structured metadata JSON containing SQL file locations and execution order. The SQL scripts were then executed in parallel using <b>multithreading in Java</b> to enhance performance and scalability.</li>
                                <li className="modalContent-bullets-li"><b>Automation of deployment services</b> as part of the <b>UPaaS team</b> for the <b>Oracle Cloud Infrastructure (OCI)</b> team.</li>
                                <li className="modalContent-bullets-li"><b>Phased Optimization of Deployment Model:</b> Strategically optimized the deployment process in multiple phases to ensure minimal disruption and improved stability across environments.</li>
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

export default OracleExperience;
