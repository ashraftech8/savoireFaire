import React, { Fragment, useEffect, useRef, useState } from "react";
import "./landingPage.css";
import { Dialog, Transition } from "@headlessui/react";
import { useSpring, animated, config } from "react-spring";
import { useNavigate } from "react-router-dom";

export default function LandingPages() {
  const textItems = [];
  const navigate = useNavigate();
  const numItems = 400; // Number of items to initially display

  for (let i = 0; i < 400; i++) {
    textItems.push(
      <div key={i} className="flex text-slate-500 justify-center items-center">
        <span className="w-72  inline-block">Click Anywhere</span>{" "}
        <span className="text-center item mt-4 inline-block">*</span>
      </div>
    );

    if (i >= numItems - 1) break; // Stop after adding the desired number of items
  }

  //Set  Cursor
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${-100 + e.clientX}` + "px";
      cursor.style.top = `${-100 + e.clientY}` + "px";
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  // Animation
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        const promise = videoRef.current.play();
        if (promise !== undefined) {
          promise
            .then((_) => {})
            .catch((error) => console.error("Auto-play error:", error));
        }
      }
    };

    if (modalIsOpen) {
      playVideo();
    }
  }, [modalIsOpen]);

  const animation = useSpring({
    to: {
      transform: modalIsOpen ? "translateY(-100%)" : "translateY(0)", // Reset transform when modalIsOpen is false
      opacity: modalIsOpen ? 0 : 15,
    },
    config: { duration: 3500 },
    onRest: () => {
      closeModal();
      resetVideoPosition();
    },
  });
  const interpolatedOpacity = animation.opacity.interpolate((val) => `${val}`);
  const resetVideoPosition = () => {
    if (videoRef.current) {
      videoRef.current.style.transform = "translate(-50%, -60%)"; // Reset the video position to its center
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setModalIsOpen(false);
    }, 500);
  }, []);

  const Data = [
    "https://savoir-faire.cdn.prismic.io/savoir-faire/4e47d354-a405-4357-8edb-076627d47068_D-Housebar-0003.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/f4870362-8ea7-4937-8f87-db304ae3249c_D-Housebar-0002.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/4e47d354-a405-4357-8edb-076627d47068_D-Housebar-0003.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/e6eb9de3-520a-41f4-9de2-f31a6b0ea5e8_D-Housebar-0006.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/3d4d56a7-519e-4cab-be80-1cd764d92536_D-Housebar-0008.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/2caa877e-c365-47e1-acda-19e703ff12a5_D-Maserati-0003.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/203d0d27-98a9-4637-a497-00c52fd73cca_D-Maserati-0007.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/f9b7be41-44fe-4931-8358-1179581ac7f3_D-Juilliard-0002.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/468ed65c-cfdb-4c62-8c36-8fecf559e293_D-Juilliard-0004.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/7927a5a6-1ed7-4a53-8a14-48548e1f382d_D-CaviarKaspia-0002.webm",
    "https://savoir-faire.cdn.prismic.io/savoir-faire/a8efb2c7-7978-49ba-b2b5-52a39d2cb87f_D-CaviarKaspia-0004.webm",
  ];

  const openModal = () => {
    // setVideoIndex(index);
    setModalIsOpen(true);
  };

  useEffect(() => {
    if (modalIsOpen) {
      const randomIndex = Math.floor(Math.random() * Data.length);
      const videoLink = Data[randomIndex];
      console.log("videoLink", videoLink);
      if (videoRef.current) {
        videoRef.current.src = videoLink;
      }
    }
  }, [modalIsOpen]);
  const handleAbout = () => {
    navigate("/about");
  };
  const PageData = () => {
    return (
      <>
        <div className="position-relative overflow-y-hidden overflow-x-hidden">
          <div className="absolute h-20 w-full  flex items-center  justify-end mt-[-10] text-white ">
            <img
              src="https://www.savoirfaire.nyc/_nuxt/star-black.f0035203.svg"
              alt="star"
              className="absolute bg-white cursor-pointer rounded-[45%] w-[5rem] mr-16 mt-24 h-[4rem] transition-transform duration-300 transform-gpu hover:rotate-360"
              onClick={() => handleAbout()}
            />
          </div>
          <div
            className=" p-0 m-0 overflow-y-hidden overflow-x-hidden"
            onClick={() => openModal(Math.floor(Math.random() * 11))}
          >
            <div>
              <div className="marquee relative">
                <div className="scroll-wrapper flex">
                  <div className="flex gap-24 font-normal mt-8 text-[24px]">
                    {textItems}
                  </div>
                  <div className="flex gap-24 font-normal mt-8 text-[24px]">
                    {textItems}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end text-center justify-center h-[92vh]">
              <img
                className="w-[100%]"
                src="https://www.savoirfaire.nyc/_nuxt/savoir-faire-logo.a8b7c534.svg"
                alt="bg-imag"
              />
            </div>
          </div>
          {/* Modal */}
          <div className="flex items-center overflow-y-hidden overflow-x-hidden  justify-center">
            {modalIsOpen && (
              <animated.div
                className="absolute top-[60%] left-auto  overflow-y-hidden"
                style={{ ...animation, opacity: interpolatedOpacity }}
              >
                <video
                  ref={videoRef}
                  style={{ border: "none" }}
                  autoPlay
                  muted
                  width="auto"
                  height="315"
                  onClick={() => openModal(Math.floor(Math.random() * 11))}
                >
                  <source
                    type="video/webm"
                    style={{
                      border: "none",
                    }}
                  />
                  Your browser does not support the video tag.
                </video>
              </animated.div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <PageData />
    </>
  );
}
