import React from "react";

import './Skills.css';

const Skills = () => {
    return (
        <div className="section-skills">

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary skill-top-heading">
                    TECHNICAL SKILLS
                </h2>
            </div>
            <div className='section-skills-divider'>
                <div className="language-and-framework-parent">
                    <div className="language-and-framework-parent-header">
                        <h1 className="language-and-framework-parent-header-text">LANGUAGE & FRAMEWORK</h1>
                    </div>
                    <div className="language-and-framework-parent-desc">
                        <h3 className="language-and-framework-parent-desc-text">C &nbsp;   |&nbsp;   C++ &nbsp;   |&nbsp;   Java &nbsp;   |&nbsp;   JavaScript &nbsp;   |&nbsp;   HTML &nbsp;   |&nbsp;   CSS &nbsp;   |&nbsp;   ReactJS &nbsp;   |&nbsp;   ExtJS &nbsp;   |&nbsp;   TailwindCSS &nbsp;   |&nbsp;   Bootstrap &nbsp;   |&nbsp;   MySQL &nbsp;   |&nbsp;   Snowflake &nbsp;   |&nbsp;   Firebase &nbsp;   |&nbsp;   Spring &nbsp;   |&nbsp;   Boot &nbsp;   |&nbsp;   Redis &nbsp;   |&nbsp;   Hibernate &nbsp;   |&nbsp;   Kubernetes</h3>
                    </div>
                </div>
                <div className="language-and-framework-parent">
                    <div className="language-and-framework-parent-header">
                        <h1 className="language-and-framework-parent-header-text">TOOLS</h1>
                    </div>
                    <div className="language-and-framework-parent-desc">
                        <h3 className="language-and-framework-parent-desc-text">Git &nbsp;   |&nbsp;   Jenkins &nbsp;   |&nbsp;   ArgoCD &nbsp;   |&nbsp;   HighCharts &nbsp;   |&nbsp;   Crossfilters &nbsp;   |&nbsp;   AWS &nbsp;   |&nbsp;   GCP &nbsp;   |&nbsp;   Azure</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;