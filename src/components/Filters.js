import React, { useState } from "react";
import FilterCards from "./FilterCards";

const Filters = ({ image, setMainFilter }) => {
  const [filtersTabOpen, setFiltersTabOpen] = useState(false);
  const handleClick = () => {
    filtersTabOpen ? setFiltersTabOpen(false) : setFiltersTabOpen(true);
  };
  return (
    <div>
      <i class="fas fa-sliders-h" onClick={handleClick}></i>
      <FilterCards
        image={image}
        filtersTabOpen={filtersTabOpen}
        setMainFilter={setMainFilter}
      />
    </div>
  );
};

export default Filters;
