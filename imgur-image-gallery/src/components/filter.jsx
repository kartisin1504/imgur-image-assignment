
import "./filter.css";

const ImageFilter = (props) => {
  const onListChangeHandler = (event) => {
    props.onFilterVal(event.target.value);
    //console.log(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by section:</label>
        <select value={props.selected} onChange={onListChangeHandler} aria-label="section" >
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
