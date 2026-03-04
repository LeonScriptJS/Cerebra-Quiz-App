import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TopicSelectionPage from "./components/TopicSelectionPage";
import QuizQuestionPage from "./components/QuizQuestionPage";
import CongratsPage from "./components/CongratsPage";

function App() {
  return (
    <>
      <Router>
       
  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/select" element={<TopicSelectionPage />} />
            <Route path="/quiz" element={<QuizQuestionPage />} />
            <Route path="/result" element={<CongratsPage />} />
          </Routes>

      </Router>
    </>
  );
}

export default App;
