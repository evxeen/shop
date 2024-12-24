import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import About from "./pages/About/About.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
