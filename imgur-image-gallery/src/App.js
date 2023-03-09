import "./App.css";

import {
  galleryImages,
  CLIENTID,
  GETURL,
  SECTION,
  SORT,
} from "./components/Data";
import { useContext, useEffect, useState } from "react";
import FilterContext from "./store/filter-context";
import Gallery from "./components/gallery/gallery";

function App() {
  const [imgList, setImgList] = useState(galleryImages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const filterCtx = useContext(FilterContext);
  const [selectedVal, setSelectVal] = useState(filterCtx);

  // Below code can be used during fetch of images from imgur
  useEffect(() => {
    const loadImg = async () => {
      try {
        setIsLoading(true);
        setError(null);
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
        setError(error.message);
        setIsLoading(false);
      }
      if (selectedVal !== undefined) {
        const filtered_array = galleryImages.filter((item) => {
          // Filter Condition
          return item.section === selectedVal;
        });
        setImgList(filtered_array);
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

export default App;
