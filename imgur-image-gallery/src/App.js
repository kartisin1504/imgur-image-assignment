import "./App.css";
import Gallery from "./components/gallery";
import { galleryImages } from "./components/Data";
import { useEffect, useState } from "react";

function App() {
  const [imgList, setImgList] = useState(galleryImages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onupdateListHandler = (filterVal) => {
    //console.log(filterVal);
    const filtered_array = galleryImages.filter(
      // Callback function
      (item) => {
        // Filter Condition
        return item.section === filterVal;
      }
    );
    setImgList(filtered_array);
  };
  // Below code can be used during fetch of images from imgur
  useEffect(() => {
    const fetchImageHandler = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          "https://kartik-3d328.firebaseio.com/items.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);
        setImgList(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    //fetchImageHandler();
  }, []);

  return (
    <div className="App">
      <br />
      <div>
        <strong>Responsive Photo Gallery in React JS</strong>
      </div>
      <br />
      <br />
      {isLoading && <p>Loading.....</p>}
      <Gallery galleryImages={imgList} filterhandlerVal={onupdateListHandler} />
    </div>
  );
}

export default App;
