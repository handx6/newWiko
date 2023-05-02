import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import SmartphonesPage from "./pages/SmartphonesPage";
import TelPage from "./pages/TelPage";
import AccessoiresPage from "./pages/AccessoiresPage";
import ObjConPage from "./pages/ObjConPage";
import ActuPage from "./pages/ActuPage";
import ConseilsPage from "./pages/ConseilsPage";
import AssistPage from "./pages/AssistPage";
import AssistProdPage from "./pages/AssistProdPage";
import ProPage from "./pages/ProPage";
import Layout from "./components/Layouts/Layout";
import ActuDetailsPage from "./pages/ActuDetailsPage";
import FaqPage from "./pages/FaqPage";

function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize);
    };

    window.addEventListener('resize', handleWindowResize);
  

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
 console.log(windowSize)
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop/mobiles/smartphones"
            element={<SmartphonesPage />}
          />
          <Route
            path="/shop/mobiles/telephones-portables"
            element={<TelPage />}
          />
          <Route path="/shop/accessoires" element={<AccessoiresPage />} />
          <Route path="/shop/objets-connectes" element={<ObjConPage />} />
          <Route path="/shop/conseils-pratiques" element={<ConseilsPage />} />
          <Route path="/shop/assistance-wiko" element={<AssistPage />} />
          <Route
            path="/shop/assistance-produit-wiko"
            element={<AssistProdPage />}
          />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/actualites/" element={<ActuPage />} />
          <Route path="/actualites/:id" element={<ActuDetailsPage />} />
          <Route path="/professionnels" element={<ProPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
