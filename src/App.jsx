import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
