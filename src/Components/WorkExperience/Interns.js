import React from "react";
import { reduxActions } from "../../Redux/Store";
import { useDispatch } from "react-redux";

const Intern = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(reduxActions.setAnalyticsInternModalIsOpen({ value: false }));
    };

    const handleBackdropClick = (event) => {
        // Close the modal if the click is outside the modal content
        if (event.target.className === 'modal') {
            handleClose();
        }
    };
    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modalContent-intern">
                <span className="closeButton" onClick={handleClose}>&times;</span>
                <div className="modalContent-parent">
                    <div className="modalContent-header">
                        <h2 className="modalContent-header-h2">Analytics Intern | Bhubaneshwar - IN</h2>
                        <p className="modalContent-header-p">Jun 2021 - Jul 2022</p>
                    </div>
                    <div className="modalContent-bullets">
                        <ul>
                            <li className="modalContent-bullets-li">Developed <b>reusable JavaScript (frontend) modules</b> using ReactJS proficient in processing <b>JSON data inputs</b> to dynamically render <b>vital dashboards</b> pivotal for <b>Account Receivables (AR)</b> analysis.</li>
                            <li className="modalContent-bullets-li">Leveraged <b>SQL and Snowflake as database inventory</b> to write queries as per client’s requirements.</li>
                            <li className="modalContent-bullets-li">Utilized <b>JUnit</b> for comprehensive <b>unit testing</b>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intern;