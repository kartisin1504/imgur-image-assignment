import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CLIENTID, GETURL, SECTION, SORT } from "../Data";
import Gallery from "../gallery/gallery";
import Error from "../route/Error";


const Service=()=>{
  const [imgList, setImgList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { userVal } = useSelector((state) => state.update);
 

  // Below code can be used during fetch of images from imgur
  useEffect(() => {
    const loadImg = async () => {
      try {
        setIsLoading(true);
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
  }, [userVal]);

  return (
    <div className="App">
      <div className="Title-section">
        <strong>Responsive Photo Gallery in React JS</strong>
      </div>

  {isLoading && <p>Loading.....</p>}

  <Gallery galleryImages={imgList} />
    </div>
  );

}
export default Service