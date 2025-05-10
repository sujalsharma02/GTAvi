import React, { useState } from "react";
import IntroMask from "./components/IntroMask";
import LandingPage from "./components/LandingPage";
import useIntroAnimation from "./hooks/useIntroAnimation";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  useIntroAnimation(setShowContent);

  return (
    <>
      {!showContent && <IntroMask />}
      {showContent && <LandingPage />}
    </>
  );
}

export default App;
