import React, { Dispatch, SetStateAction } from "react";
import FilterCards from "./FilterCards";

interface Props {
  image: string,
    setMainFilter: Dispatch<SetStateAction<string>>
    setFiltersTabOpen: Dispatch<SetStateAction<boolean>>
    setBrightness: Dispatch<SetStateAction<number>>
    setContrast: Dispatch<SetStateAction<number>>
    setSaturation: Dispatch<SetStateAction<number>>
    filtersTabOpen: boolean
}
const Filters:React.FC<Props> = ({
  image,
  setMainFilter,
  filtersTabOpen,
  setFiltersTabOpen,
  setBrightness,
  setContrast,
  setSaturation,
}) => {
  const handleClick = () => {
    filtersTabOpen ? setFiltersTabOpen(false) : setFiltersTabOpen(true);
  };
  return (
    <div>
      <i
        className="fas fa-sliders-h text-gray-500 text-4xl"
        onClick={handleClick}
      ></i>
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
