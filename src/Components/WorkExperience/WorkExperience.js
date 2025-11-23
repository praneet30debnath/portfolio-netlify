import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './WorkExperience.css';
import hrcLogo from './highradius-corporation.webp';
import oracleLogo from '../../Images/CompanyLogos/Oracle-Symbol.png';
import { useDispatch, useSelector } from 'react-redux';
import { reduxActions } from "../../Redux/Store";
import HighRadiusExperience from "./HighRadiusExperience";
import OracleExperience from "./OracleExperience";

const WorkExperience = () => {
    const dispatch = useDispatch();
    const highRadiusModalIsOpen = useSelector((state) => state.rootStore.highRadiusModalIsOpen);
    const oracleModalIsOpen = useSelector((state) => state.rootStore.oracleModalIsOpen);

    const handleClick = (company) => {
        if (company === 'highradius') {
            dispatch(reduxActions.setHighRadiusModalIsOpen({ value: true }));
        } else if (company === 'oracle') {
            dispatch(reduxActions.setOracleModalIsOpen({ value: true }));
        }
    };

    useEffect(() => {
        if (highRadiusModalIsOpen || oracleModalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [highRadiusModalIsOpen, oracleModalIsOpen]);

    return (
        <div className="workExperienceParent">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: '2%',
                        width: '40%',
                        height: '38vh',
                    },
                    justifyContent: 'space-around',
                    '@media (max-width: 768px)': {
                        '& > :not(style)': {
                            width: '45%',
                            height: '20vh',
                        },
                    },
                }}
            >
                <Paper
                    elevation={6}
                    onClick={() => handleClick('highradius')}
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
                            <img src={hrcLogo} alt='HighRadius Logo' style={{ height: '60%' }}></img>
                        </div>
                        <div className="paperOneDesc">
                            <h1>HighRadius Technologies</h1>
                            <h2>2021 - 2024</h2>
                        </div>
                    </div>
                </Paper>
                <Paper
                    elevation={6}
                    onClick={() => handleClick('oracle')}
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
                    <div className="paperTwo">
                        <div className="paperOneImg">
                            <img src={oracleLogo} alt='Oracle Logo' style={{ height: '60%' }}></img>
                        </div>
                        <div className="paperOneDesc">
                            <h1>Oracle Corporation</h1>
                            <h2>2025 - Present</h2>
                        </div>
                    </div>
                </Paper>
            </Box>

            {highRadiusModalIsOpen && <HighRadiusExperience />}
            {oracleModalIsOpen && <OracleExperience />}
        </div>
    );
}

export default WorkExperience;
