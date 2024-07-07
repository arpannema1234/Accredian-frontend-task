import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ReferralSteps from "./components/ReferralSteps";
import ReferralBenefits from "./components/ReferralBenefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";
import ReferralModal from "./components/ReferralModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Header />
      <Banner handleOpen={handleOpen} />
      <ReferralSteps />
      <ReferralBenefits handleOpen={handleOpen} />
      <FAQ />
      <Footer />
      <ReferralModal open={open} handleClose={handleClose} />
      <ToastContainer />
    </div>
  );
}

export default App;
