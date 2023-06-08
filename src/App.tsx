import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EmailLoginScreen from "./Component/EmailLoginScreen";
import EmailSubmit from "./Component/EmailSubmit";


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<EmailLoginScreen />} />
          <Route path="/submited" element={<EmailSubmit />} />
        </Routes>
    
    </div>
  );
}

export default App;
