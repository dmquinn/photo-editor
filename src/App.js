import React, { useState } from "react";
import Header from "./components/Header";
import MainPhoto from "./components/MainPhoto";
import Filters from "./components/Filters";
import Tools from "./components/Tools";
import Overlays from "./components/Overlays";

function App() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1612325253300-0d45438c1d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"
  );
  const [mainFilter, setMainFilter] = useState("");
  const [filtersTabOpen, setFiltersTabOpen] = useState("");
  const [toolsTabOpen, setToolsTabOpen] = useState(false);
  const [overlaysTabOpen, setOverlaysTabOpen] = useState(false);
  const [mainOverlay, setMainOverlay] = useState("");
  const [contrast, setContrast] = useState(undefined);
  const [brightness, setBrightness] = useState(undefined);
  const [saturation, setSaturation] = useState(undefined);

  return (
    <>
      <Header setImage={setImage} />
      <div className="bg-gray-900 grid grid-cols-3 gap-4 h-screen">
        <div className="p-10">
          <Filters
            image={image}
            setMainFilter={setMainFilter}
            filtersTabOpen={filtersTabOpen}
            setFiltersTabOpen={setFiltersTabOpen}
            setSaturation={setSaturation}
            setBrightness={setBrightness}
            setContrast={setContrast}
          />
          <Tools
            image={image}
            toolsTabOpen={toolsTabOpen}
            setToolsTabOpen={setToolsTabOpen}
            setContrast={setContrast}
            setBrightness={setBrightness}
            setSaturation={setSaturation}
          />
        </div>

        <MainPhoto
          image={image}
          mainFilter={mainFilter}
          contrast={contrast}
          brightness={brightness}
          saturation={saturation}
          mainOverlay={mainOverlay}
        />
        <div className="p-10">
          <Overlays
            overlaysTabOpen={overlaysTabOpen}
            setOverlaysTabOpen={setOverlaysTabOpen}
            image={image}
            setMainOverlay={setMainOverlay}
          />
        </div>
      </div>
    </>
  );
}

export default App;
