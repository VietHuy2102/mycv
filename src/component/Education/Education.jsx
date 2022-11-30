import React from "react";
import { Link } from "react-router-dom";
import { education1, education2, education3 } from "../../data/Data";

export default function Education() {
    const Exp = ({ field, nameSchool, time }) => (
        <tr>
            <td>{field}</td>
            <td>{nameSchool}</td>
            <td>{time}</td>
            <td>
                <Link to="#" className="btn blue lighten-2">
                    View
                </Link>
            </td>
        </tr>
    );

    return (
        <div className="card">
            <div className="card-content">
                <h5>
                    <strong>Education</strong>
                </h5>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Certificate</th>
                            <th>School</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Exp
                            field={education3.specialized}
                            nameSchool={education3.school}
                            time={education3.time}
                        />
                        <Exp
                            field={education2.specialized}
                            nameSchool={education2.school}
                            time={education2.time}
                        />
                        <Exp
                            field={education1.specialized}
                            nameSchool={education1.school}
                            time={education1.time}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}
