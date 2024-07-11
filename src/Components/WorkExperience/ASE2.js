import React from "react";
import { reduxActions } from "../../Redux/Store";
import { useDispatch } from "react-redux";

const ASE2 = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(reduxActions.setAse2IsOpen({ value: false }));
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
                        <h2 className="modalContent-header-h2">Associate Software Engineer I | Hyderabad - IN</h2>
                        <p className="modalContent-header-p">Jul 2022 - Jun 2023</p>
                    </div>
                    <div className="modalContent-bullets">
                        <ul>
                            <li className="modalContent-bullets-li">Implemented and Designed <b>Redis Cache</b> to reduce DB hits for static and dynamic calls responsible for grid
                                loading, and identify additonal bottlenecks, leading to design and implementation of creating <b>asynchronous functions</b>, bringing loading time from 50+ seconds to 7 seconds as part of the <b>Net Product Score (NPS)
                                    enhancement initiative</b>.</li>
                            <li className="modalContent-bullets-li"><b>Improved Cost of Goods Sold (COGS)</b> and <b>reduced cloud expenses</b> through the development of a
                                streamlined framework to optimize Java class operations within <b>Kubernetes</b> infrastructure.</li>
                            <li className="modalContent-bullets-li"><b>Designed and developed a user-friendly interface</b> exclusively for the support team, facilitating efficient
                                execution of workflow actions in <b>Argo</b> such as <b>retrying, retriggering, or terminating workflows</b>.</li>
                            <li className="modalContent-bullets-li"><b>Automated migration</b> processes to <b>accelerate and streamline</b> overall migration timelines, enhancing operational
                                efficiency.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ASE2;