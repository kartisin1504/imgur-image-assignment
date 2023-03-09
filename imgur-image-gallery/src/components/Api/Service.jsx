import { useContext, useEffect, useState } from "react";
import FilterContext from "../../store/filter-context";
import { CLIENTID, GETURL, SECTION, SORT } from "../Data";
import Gallery from "../gallery/gallery";
import Error from "../route/Error";


const Service=()=>{
     const [imgList, setImgList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const filterCtx = useContext(FilterContext);
  const [selectedVal, setSelectVal] = useState(filterCtx);

  // Below code can be used during fetch of images from imgur
  useEffect(() => {
    const loadImg = async () => {
      try {
        setIsLoading(true);
        // Client ID

        // Making the post request
        const response = await fetch(
          `${GETURL}/${SECTION}/${SORT}/1?showViral=true&mature=false&album_previews=true`,
          {
            // API Endpoint
            method: "GET",

            headers: {
              Authorization: "Client-ID " + CLIENTID,
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
         
         throw new Error("Something went wrong");
       
        }
        const data = await response.json();
        setImgList(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
  
    };
    loadImg();
  }, [selectedVal]);

  return (
    <div className="App">
      <div className="Title-section">
        <strong>Responsive Photo Gallery in React JS</strong>
      </div>

      {isLoading && <p>Loading.....</p>}
      <FilterContext.Provider value={{ selectedVal, setSelectVal }}>
        <Gallery galleryImages={imgList} />
        
      </FilterContext.Provider>
    </div>
  );

}
export default Service