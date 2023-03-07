import "./App.css";
import Gallery from "./components/gallery";
import { galleryImages } from "./components/Data";
import { useEffect, useState } from "react";

function App() {
  const section = "top";
  const sort = "top";
  //const window = ""; //intial state
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
    const loadImg = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Client ID
        const clientId = "4fa8a2c1a468409",
          auth = "Client-ID " + clientId;

        // Creating an object of formData
        //const selectionData = new FormData();

        // Adding our image to formData
        //formDselectionDataata.append("section", sect);

        // Making the post request
        const response = await fetch(
          `https://api.imgur.com/3/gallery/${section}/${sort}/1?showViral=true&mature=false&album_previews=true`,
          {
            // API Endpoint
            method: "GET", // HTTP Method
            // body: formData, // Data to be sent
            headers: {
              // Setting header
              Authorization: auth,
              Accept: "application/json",
            },
          }
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
    loadImg();
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
