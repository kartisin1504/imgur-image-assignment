
import { useContext, useEffect, useState } from "react";
import FilterContext from "../../store/filter-context";
import {  galleryImages, } from "../Data";
import Gallery from "../gallery/gallery";


const Static=()=>{
  const [imgList, setImgList] = useState(galleryImages);
  const filterCtx = useContext(FilterContext);
  const [selectedVal, setSelectVal] = useState(filterCtx);

  // Below code can be used during fetch of images from imgur
  useEffect(() => {
    
      if (selectedVal !== undefined) {
        const filtered_array = galleryImages.filter((item) => {
          // Filter Condition
          return item.section === selectedVal;
        });
        setImgList(filtered_array);
      }
    
      }, [selectedVal]);

  return (
    <div className="App">
      <div className="Title-section">
        <strong>Responsive Photo Gallery in React JS</strong>
      </div>

      
      <FilterContext.Provider value={{ selectedVal, setSelectVal }}>
        <Gallery galleryImages={imgList} />
      </FilterContext.Provider>
    </div>
  );

}


export default Static