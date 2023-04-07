import logo from './logo.svg';
import Introduction from './components/Introduction';
import Profiles from './components/Profiles';
import Skills from './components/Skills';

import "./App.css"
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <Profiles />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
