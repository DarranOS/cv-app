import "./App.css";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import PersonalDetails from "./components/PersonalDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Header" />
      <PersonalDetails title="Personal Deets" />
      <Education />
      <WorkExperience title="MakingBank" />
    </div>
  );
}

export default App;
