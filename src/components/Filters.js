import React, { useState } from "react";
import FilterCards from "./FilterCards";

const Filters = ({
  image,
  setMainFilter,
  filtersTabOpen,
  setFiltersTabOpen,
  setToolsTabOpen,
  setBrightness,
  setContrast,
  setSaturation,
}) => {
  const handleClick = () => {
    setToolsTabOpen(false);
    filtersTabOpen ? setFiltersTabOpen(false) : setFiltersTabOpen(true);
  };
  return (
    <div>
      <i class="fas fa-sliders-h" onClick={handleClick}></i>
      <FilterCards
        image={image}
        filtersTabOpen={filtersTabOpen}
        setMainFilter={setMainFilter}
        setBrightness={setBrightness}
        setSaturation={setSaturation}
        setContrast={setContrast}
      />
    </div>
  );
};

export default Filters;
