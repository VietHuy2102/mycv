import React from "react";
import {experience1,experience2,experience3} from "../data/Data"

export default function Experience() {
    const Skills = ({ position, company, mission }) => (
        <div className="row">
            <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                    Jan
                    <strong> 2016 </strong>- Match
                    <strong> 2017</strong>
                </p>
            </div>
            <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                    <h5 className="no-pad mt-bottom">
                        <strong>{position}</strong>
                        <span> - {company} </span>
                    </h5>
                    <div
                        contentEditable="true"
                        dangerouslySetInnerHTML={{ __html: mission }}
                    ></div>
                    <p></p>
                </blockquote>
            </div>
        </div>
    );

    return (
        <div className="card">
            <div className="card-action">
                <h5>
                    <strong>EXPERIENCE</strong>
                </h5>
                <Skills
                    position={experience1.position}
                    company={experience1.company}
                    mission={experience1.mission}
                />
                <Skills 
                position={experience2.position}
                company={experience2.company}
                mission={experience2.mission}/>
                <Skills 
                position={experience3.position}
                company={experience3.company}
                mission={experience3.mission}/>
            </div>
        </div>
    );
}
