import React from "react";

export default function Skill() {
    return (
        <div className="card">
            <div className="card-action">
                <h5 >
                    <strong>PROFESSIONL SKILLS</strong>
                </h5>
                <div className="row ">
                    <div className="col s6">
                        <p>HTML</p>
                        <div className="progress grey lighten-1">
                            <div
                                className="determinate blue"
                                style={{ width: "70%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>CSS</p>
                        <div className="progress grey lighten-1">
                            <div
                                className="determinate blue"
                                style={{ width: "30%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>JAVASCRIPT</p>
                        <div className="progress grey lighten-1">
                            <div
                                className="determinate blue"
                                style={{ width: "50%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>React</p>
                        <div className="progress grey lighten-1">
                            <div
                                className="determinate blue"
                                style={{ width: "40%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>PhotoShop</p>
                        <div className="progress grey lighten-1">
                            <div
                                className="determinate blue"
                                style={{ width: "30%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>MUI</p>
                        <div className="progress grey lighten-1">
                            <div
                                className="determinate blue"
                                style={{ width: "30%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
