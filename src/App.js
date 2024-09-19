import logo from "./logo.svg";
import Introduction from "./components/Introduction";
import Profiles from "./components/Profiles";
import Skills from "./components/Skills";

import "./App.css";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";

function App() {
    return (
        <div className="App">
            <Introduction />
            <Profiles />
            <Experiences />
            <Projects />
            <Skills />
        </div>
    );
}

export default App;
