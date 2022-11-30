import React from "react";
import { Link } from "react-router-dom";
import Img from "../../images/person.jpg";
import "./Profile.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
} from "react-icons/fa";

export default function Profile() {
    return (
        <div style={{ background: "#F5F5F5" }}>
            <div className="card">
                <div className="card-image">
                    <img className="activator" src={Img} alt="Việt Huy" />

                    <Link className="btn-floating halfway-fab waves-effect wave-light red">
                        <i className="material-icons activator">more_vert</i>
                    </Link>
                </div>
                <div className="card-content">
                    <span className="card-title activator ">Việt Huy</span>
                    <p>Front-End Web Developer</p>
                </div>
                <div className="card-reveal">
                    <h3 className="card-title grey-text text-darken-4">
                        Follow me
                        <i className="material-icons right">close</i>
                    </h3>
                    <div className="flex-container ">
                        <Link>
                            <FaFacebookF size={25} />
                        </Link>
                        <Link>
                            <FaTwitter size={25} />
                        </Link>
                        <Link>
                            <FaGooglePlusG size={25} />
                        </Link>
                        <Link>
                            <FaInstagram size={25} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
