import React, { useState } from "react";
import Header from "./components/Header";
import MainPhoto from "./components/MainPhoto";
import Filters from "./components/Filters";
import Tools from "./components/Tools";

function App() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1612325253300-0d45438c1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"
  );
  const [mainFilter, setMainFilter] = useState("");

  return (
    <>
      <Header setImage={setImage} />
      <div className="mainContainer">
        <div className="leftPanel">
          <Filters image={image} setMainFilter={setMainFilter} />
        </div>
        <MainPhoto image={image} mainFilter={mainFilter} />
      </div>
    </>
  );
}

export default App;
