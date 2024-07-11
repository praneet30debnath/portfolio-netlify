import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './WorkExperience.css';
import hrcLogo from './highradius-corporation.webp';
import { useDispatch, useSelector } from 'react-redux';
import { reduxActions } from "../../Redux/Store";
import Intern from "./Interns";
import ASE1 from "./ASE1";
import ASE2 from "./ASE2";

const WorkExperience = () => {
    const dispatch = useDispatch();
    const analyticsInternModalIsOpen = useSelector((state) => state.rootStore.analyticsInternModalIsOpen);
    const ase1IsOpen = useSelector((state) => state.rootStore.ase1IsOpen);
    const ase2IsOpen = useSelector((state) => state.rootStore.ase2IsOpen);

    const handleClick = (index) => {
        if (index === 1) {
            dispatch(reduxActions.setAnalyticsInternModalIsOpen({ value: true }));
        } else if (index === 2) {
            dispatch(reduxActions.setAse1IsOpen({ value: true }));
        } else {
            dispatch(reduxActions.setAse2IsOpen({ value: true }));
        }
    };

    useEffect(() => {
        if (analyticsInternModalIsOpen || ase1IsOpen || ase2IsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [analyticsInternModalIsOpen, ase1IsOpen, ase2IsOpen]);

    return (
        <div className="workExperienceParent">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: '2%',
                        width: '25%',
                        height: '38vh',
                    },
                    justifyContent: 'space-around',
                }}
            >
                <Paper
                    elevation={6}
                    onClick={() => handleClick(1)}
                    sx={{
                        cursor: 'pointer',
                        borderRadius: '1rem',
                        boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.4)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05) translateY(-0.5rem)',
                        },
                    }}
                >
                    <div className="paperOne">
                        <div className="paperOneImg">
                            <img src={hrcLogo} alt='hrcLogo' style={{ height: '60%' }}></img>
                        </div>
                        <div className="paperOneDesc">
                            <h1>Analytics Intern</h1>
                            <h2>2021 - 2022</h2>
                        </div>
                    </div>
                </Paper>
                <Paper
                    elevation={6}
                    onClick={() => handleClick(2)}
                    sx={{
                        cursor: 'pointer',
                        borderRadius: '1rem',
                        boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.4)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05) translateY(-0.5rem)',
                        },
                    }}
                >
                    <div className="paperOne">
                        <div className="paperOneImg">
                            <img src={hrcLogo} alt='hrcLogo' style={{ height: '60%' }}></img>
                        </div>
                        <div className="paperOneDesc">
                            <h1>Associate Software Engineer I</h1>
                            <h2>2022 - 2023</h2>
                        </div>
                    </div>
                </Paper>
                <Paper
                    elevation={6}
                    onClick={() => handleClick(3)}
                    sx={{
                        cursor: 'pointer',
                        borderRadius: '1rem',
                        boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.4)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05) translateY(-0.5rem)',
                        },
                    }}
                >
                    <div className="paperOne">
                        <div className="paperOneImg">
                            <img src={hrcLogo} alt='hrcLogo' style={{ height: '60%' }}></img>
                        </div>
                        <div className="paperOneDesc">
                            <h1>Associate Software Engineer II</h1>
                            <h2>2023 - Present</h2>
                        </div>
                    </div>
                </Paper>
            </Box>

            {analyticsInternModalIsOpen && <Intern />}
            {ase1IsOpen && <ASE1 />}
            {ase2IsOpen && <ASE2 />}
        </div>
    );
}

export default WorkExperience;
