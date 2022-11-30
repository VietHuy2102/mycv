import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js"
import Home from "./component/Home";
import Skill from "./component/Skill/Skill.jsx";
import Education from "./component/Education/Education.jsx";
import Experience from "./Experience/Experience.jsx";
import Portfolios from "./component/Portfolios";
import { Routes, Route, BrowserRouter } from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/skills" element={<Skill />} />
                <Route path="/educations" element={<Education />} />
                <Route path="/experiences" element={<Experience />} />
                <Route path="/portfolios" element={<Portfolios />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
