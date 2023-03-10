
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {  galleryImages, } from "../Data";
import Gallery from "../gallery/gallery";


const Static=()=>{
  const [imgList, setImgList] = useState(galleryImages);
  const { userVal } = useSelector((state) => state.update);
  
  // Below code can be used during filter  of images from imgur
  useEffect(() => {
    
      if (userVal !== '') {
        const filtered_array = galleryImages.filter((item) => {
          // Filter Condition
          return item.section === userVal;
        });
        setImgList(filtered_array);
      }
    
      }, [userVal]);

  return (
    <div className="App">
      <div className="Title-section">
        <strong>Responsive Photo Gallery in React JS</strong>
      </div>     
      <Gallery galleryImages={imgList} />
      
    </div>
  );

}

export default Static