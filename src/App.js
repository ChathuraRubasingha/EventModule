import "antd/dist/antd.min.css";
import EventInfo from "./pages/Event/EventInfo";
import PostedEvent from "./pages/Event/PostedEvent";
import PostEvent from "./pages/Event/PostEvent";
// import Profile from "./pages/Profile/Company/Profile";
import PostJob from "./pages/Job/Company/PostJob";
import Login from "./components/Login";
import CompanyRegister from "./components/CompanyRegister";
import StudentDefaultLayout from "./Layout/StudentDefaultLayout";
import EventHome from "./pages/Event/EventHome";
import PostedJob from "./pages/Job/Company/PostedJob";
import PostedProject from "./pages/Project/PostedProject";
import PostProject from "./pages/Project/PostProject";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectUser from "./components/SelectUser";
import StudentRegister from "./components/StudentRegister";
import MentorRegister from "./components/MentorRegister";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path="/" exact component={Profile} /> */}
        <Route path="/studentpage" exact component={StudentDefaultLayout} />
        <Route path="/" exact component={EventHome} />
        <Route path="/postedevent" exact component={PostedEvent} />
        <Route path="/postevent" exact component={PostEvent} />
        {/* <Route path="/profile" exact component={Profile} /> */}
        <Route path="/eventinfo" exact component={EventInfo} />
        <Route path="/postjob" exact component={PostJob} />
        <Route path="/postedjob" exact component={PostedJob} />
        <Route path="/login" exact component={Login} />
        <Route path="/studentregister" exact component={StudentRegister} />
        <Route path="/companyregister" exact component={CompanyRegister} />
        <Route path="/mentorregister" exact component={MentorRegister} />
        <Route path="/postedproject" exact component={PostedProject} />
        <Route path="/postjob" exact component={PostProject} />
        <Route path="/selectuser" exact component={SelectUser} />
      </Router>
    </div>
  );
}

export default App;
