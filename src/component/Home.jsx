import React from "react";
import About from "../component/About/About";
import Education from "../component/Education/Education";
import Experience from "../Experience/Experience";
import Navbar from "./Navbar";
import Profile from "../component/Profile/Profile";
import Skill from "../component/Skill/Skill";

export default function Home() {
    return (
        <section>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <Profile />
                    </div>
                    <div className="col s12 m8 l9">
                        <About />
                        <Skill />
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    );
}
