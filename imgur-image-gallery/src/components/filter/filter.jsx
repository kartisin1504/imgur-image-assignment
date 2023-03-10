
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeByUser} from '../../store/index'

import "./filter.css";

const ImageFilter = () => {
  const dispatch = useDispatch(); 
  const onListChangeHandler = (event) => {
   dispatch(changeByUser(event.target.value))  
  };
  return (
   
      <div className="filter">
      <div className="filter__control">
        <label>Filter by section:</label>
        <select  onChange={onListChangeHandler} aria-label="section" >
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
