
import { useContext } from "react";
import FilterContext from "../../store/filter-context";

import "./filter.css";

const ImageFilter = () => {
  
  const {selectedVal,setSelectVal} = useContext(FilterContext);
  const onListChangeHandler = (event) => {
   setSelectVal(event.target.value)
  
  };
  return (
   
      <div className="filter">
      <div className="filter__control">
        <label>Filter by section:</label>
        <select value={selectedVal} onChange={onListChangeHandler} aria-label="section" >
          <option value="EarthPorn">EarthPorn</option>
          <option value="Wine">Wine</option>
          <option value="Universe">Universe</option>
          <option value="Tech">Tech</option>
        </select>
      </div>
    </div>
   
    
      
    
    
  );
};

export default ImageFilter;
