import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const ImageSliders = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState([]);
  // const [imgCount, setImageCount] = useState(images.length);
  // console.log(imgCount);

  console.log(images);

  useEffect(() => {
    try {
      const fetchImage = async () => {
        const data = await fetch(
          "https://api.unsplash.com/photos?page=1&client_id=GRtdILaLDygp64IFCIXtiOf8JVA-CreW-uP_N8UP0Hg"
        );
        const json = await data.json();
        // console.log(json);
        setImages(json);
      };
      fetchImage();
    } catch (e) {
      console.log(e);
    }

   

  }, []);

  const handleBack = () => {
    // if (slideIndex === 0) setSlideIndex(images.length - 1);
    // else setSlideIndex(slideIndex - 1);
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  };

  const handleFor = () => {
    if (slideIndex === images.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  };
  const handleButtonImages = (ind) => {
    // console.log("clicked button");
    // console.log(slideIndex);
    // setSlideIndex(slideIndex + 1);
    console.log(ind);
    setSlideIndex(ind);
  };

  if (!images) return null;

  return (
    <div>
      <div className="flex flex-col justify-center items-center    ">
        <IoMdArrowRoundBack
          onClick={handleBack}
          className="absolute left-[40%]  "
        />
        <div className="flex flex-row ">
          {images.map((val, idx) => {
            const { thumb } = val.urls;

            return (
              <div>
                {slideIndex === idx && (
                  <img
                    key={idx}
                    src={thumb}
                    alt="images"
                    className="h-52 w-52 object-cover  rounded-lg"
                  />
                )}
              </div>
            );
          })}
        </div>
        <IoMdArrowRoundForward
          onClick={handleFor}
          className=" absolute right-[40%]"
        />
        <div>
          {[...Array(images.length)].map((val, ind) => {
            return (
              <>
                {
                  <button
                    className={
                      ind === slideIndex
                        ? "bg-black p-1 rounded-full m-[1px] "
                        : " bg-slate-400 p-1 rounded-full m-[1px]"
                    }
                    onClick={() => {
                      handleButtonImages(ind);
                    }}
                  ></button>
                }
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSliders;
