import React from "react";
import { reduxActions } from "../../Redux/Store";
import { useDispatch } from "react-redux";

const ASE1 = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(reduxActions.setAse1IsOpen({ value: false }));
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
                            <li className="modalContent-bullets-li">Designed and implemented <b>reusable Java classes</b> to facilitate the seamless migration of <b>Extract, Transform,
                                and Load (ETL)</b> jobs to <b>Java-based</b> code base, employing <b>SOLID principles</b> along with the <b>Object-
                                Oriented Programming (OOP)</b> principles and <b>Multithreading</b> techniques to enhance <b>job monitoring
                                capabilities</b>.</li>
                            <li className="modalContent-bullets-li"><b>Developed and rigorously tested</b> custom Java Methods tailored to meet the unique requirements of diverse
                                clients, ensuring the delivery of robust and scalable software solutions.</li>
                            <li className="modalContent-bullets-li">Utilized <b>JUnit</b> for comprehensive <b>unit testing</b>.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ASE1;