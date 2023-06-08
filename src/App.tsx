import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EmailLoginScreen from "./Component/EmailLoginScreen";
import EmailSubmit from "./Component/EmailSubmit";
import EmailExists from "./Component/EmailExists";


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<EmailLoginScreen />} />
          <Route path="/submitted" element={<EmailSubmit />} />
          <Route path="/exists" element={<EmailExists />} />
        </Routes>
    
    </div>
  );
}

export default App;
