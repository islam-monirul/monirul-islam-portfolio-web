import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homepage from "./Pages/Homepage/Homepage";
import NotFound from "./Pages/NotFound/NotFound";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import WorkExperience from "./Pages/WorkExperience/WorkExperience";
import Skills from "./Pages/Skills/Skills";
import TopBar from "./Components/TopBar/TopBar";
import SingleProject from "./Components/SingleProject/SingleProject";

function App() {
  return (
    <BrowserRouter>
      <section>
        <TopBar></TopBar>
      </section>
      <section className="mainContainer">
        <div className="sideBar">
          <Sidebar></Sidebar>
        </div>
        <div className="gap"></div>

        <div className="mainBody">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/projectDetails/:projectId">
              <SingleProject></SingleProject>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/education">
              <Education></Education>
            </Route>
            <Route path="/experience">
              <WorkExperience></WorkExperience>
            </Route>
            <Route path="/skills">
              <Skills></Skills>
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
