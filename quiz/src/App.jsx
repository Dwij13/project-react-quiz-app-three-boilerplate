import { BrowserRouter, Route, Routes} from "react-router-dom";

import ResultComponent from "./components/ResultComponent";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;