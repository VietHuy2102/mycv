import React from "react";
import { Link } from "react-router-dom";
import {
    FaCopy,
    FaHome,
    FaIdBadge,
    FaGraduationCap,
    FaAddressCard,
} from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <nav className="light-blue darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                            My CV
                        </Link>
                        <Link
                            to="/"
                            data-target="side-nav"
                            className="sidenav-trigger"
                        >
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">
                                    <i>
                                        <FaHome /> Home
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/skill">
                                    <i>
                                        <FaCopy /> Skills
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/experience">
                                    <i>
                                        <FaIdBadge /> Experience
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/education">
                                    <i>
                                        <FaGraduationCap /> Education
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio">
                                    <i>
                                        <FaAddressCard /> Portfolios
                                    </i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <ul className="sidenav" id="side-nav">
                <li>
                    <Link to="/">
                        <i>
                            <FaHome /> Home
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to="/skill">
                        <i>
                            <FaCopy /> Skills
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to="/experience">
                        <i>
                            <FaIdBadge /> Experience
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to="/education">
                        <i>
                            <FaGraduationCap /> Education
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        <i>
                            <FaAddressCard /> Portfolios
                        </i>
                    </Link>
                </li>
            </ul> */}
        </>
    );
}
