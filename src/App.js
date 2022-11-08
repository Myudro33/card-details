import React, { useState } from "react";
import Left from "./components/Left";
import bgDesktop from "./assets/bg-main-desktop.png";
import bgMobile from "./assets/bg-main-mobile.png";
import Right from "./components/Right";

const App = () => {
  const [obj, setobj] = useState([])
  const [animation, setanimation] = useState(false)
  console.log(animation);
  return (
    <div className="w-full h-screen flex md:flex-row xs:flex-col overflow-x-hidden">
      <img className={`xs:hidden md:block ${animation?'w-[100%]':'w-[35%]'}`} src={bgDesktop} alt="img" />
      <img className="md:hidden" src={bgMobile} alt="img" />
      <Left obj={obj} />
      <Right setobj={setobj} obj={obj} setanimation={setanimation} animation={animation} />
    </div>
  );
};

export default App;
