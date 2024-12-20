import AviKartClone from "./AviCart/AviKartClone";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NoPage from "./AviCart/Page/NoPage";
import Blogs from "./AviCart/Page/Blog";
import Contact from "./AviCart/Page/Contact";
import Service from "./AviCart/Page/Service";
import Add from "./AviCart/Page/Add";
// import ReactPage from './react-router/ReactPage'
export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AviKartClone />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>

   
  );
}

export default App;
