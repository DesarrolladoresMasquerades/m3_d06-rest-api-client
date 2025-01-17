import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsLIstPage from "./pages/ProjectsLIstPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsLIstPage />} />
        <Route
          exact
          path="/projects/:projectId"
          element={<ProjectDetailsPage />}
        />
          <Route exact path="/todos" element={<TodosPage />} />
      </Routes>
    </div>
  );
}

export default App;
