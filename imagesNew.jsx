import Images from "./Images";
import { useState,useEffect } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ImageSliders = () => {
  const [images, setImages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  const setPrev = () => {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  };
  const setFor = () => {
    setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetch(
        "https://api.unsplash.com/photos?page=1&client_id=GRtdILaLDygp64IFCIXtiOf8JVA-CreW-uP_N8UP0Hg"
      );
      const json = await data.json();
      // console.log(json);
      setImages(json);
    };
    fetchImages();
  }, []);
  console.log(images);

  if (!images) return <h1>wait image is loading</h1>;
  return (
    <div>
      <IoIosArrowDropleftCircle onClick={setPrev} />
      <div className="flex gap-2">
        {images.map((val, idx) => {
          return (
            <>
              <div className={slideIndex === idx ? "active " : "inactive"}>
                {slideIndex === idx && <Images key={idx} img={val} />}
              </div>
            </>
          );
        })}
      </div>
      <IoIosArrowDroprightCircle onClick={setFor} />
    </div>
  );
};

export default ImageSliders;