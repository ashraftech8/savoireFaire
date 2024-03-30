import React, { useEffect, useState } from "react";
import "./about.css";
import emial from "../assets/eMail_Icon.svg";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  const [isBoxClicked, setIsBoxClicked] = useState(false);

  const handleBoxClick = () => {
    setIsBoxClicked(true);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if user has scrolled, then set isBoxClicked to true
      if (!isBoxClicked && window.scrollY > 0) {
        setIsBoxClicked(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBoxClicked]); // Dependency array to ensure effect only runs once

  // Read the text
  const [isReading, setIsReading] = useState(false);
  const textToRead = `
    SavoireFaireC is a holistic creative studio based in Brooklyn,
    New York. We use the purpose of design and the power of tech to
    bring next-gen brands to life, craft compelling digital
    experiences and tell stories through memotable still & motion
    content. We work with local & global business, from early-stage
    startups to world-renowned brands across all types of industries
    Led by highly experienced founders, SavoireFaireC gathers expert
    designers, strategists & technologists from across the globe
    that collectively bring in superior expertise and passionate
    craftsmanship. We are brands on creatives at heart, and have
    gained a global reputation for delivering effective elegant and
    engaging design with a meticulous attention to detail. Our
    approach to each project is bespoke: we thrive collaborating
    closely with clients and partners, and implement our
    tried-and-true methodology, to define a vision and shape
    tangible products that drives the brand to achieve its ambition.
    We embrace the culture of change and constantly engage our
    clients and ourselves into exploring new creative territories
    through innovative thinking and design. Knowing by doing,
    SavoireFaireC
  `;

  useEffect(() => {
    if (isReading) {
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesis.speak(utterance);

      utterance.onend = () => {
        setIsReading(false);
      };

      return () => {
        speechSynthesis.cancel();
      };
    }
  }, [isReading, textToRead]);

  const toggleReading = () => {
    setIsReading(!isReading);
  };

  return (
    <>
      <div className="background-image">
        <div className="sticky top-0 z-10  w-full">
          <div className=" relative flex justify-between py-10 items-start px-14">
            <div
              className={`box  border-black flex items-center justify-center  bg-white p-2 rounded-full shadow-animation  ${
                isBoxClicked ? "move-to-top-left" : "move-to-top-center"
              }`}
              onClick={handleBoxClick}
            >
              <div
                className="flex cursor-pointer box-1 gap-3 justify-center items-center bg-white px-10 py-8 rounded-full"
                onClick={toggleReading}
              >
                {/* <div className="flex gap-3 justify-center items-center translate-x-1 bg-white px-10 py-8 rounded-full shadow-animation"> */}
                <img
                  src="https://www.savoirfaire.nyc/_nuxt/play-audio-arrow.57f0a83a.svg"
                  alt="audio"
                  className="h-[60px]  w-[60px] mr-5"
                />{" "}
                <span className="text-[1.5rem] font-haas">
                  {" "}
                  Our 60 second Pitch
                </span>
              </div>
            </div>

            <div className="relative gap-y-5 flex flex-col items-center w-[100px] h-[450px]">
              <div className="bg-black  rounded-full w-24 flex justify-center h-16">
                <img
                  src="https://www.savoirfaire.nyc/_nuxt/star-black.f0035203.svg"
                  alt="star"
                  className="cursor-pointerpr-14 h-[4rem] transition-transform duration-300 transform-gpu hover:rotate-360"
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                    // backgroundColor: "black",
                    color: "white",
                  }}
                />
              </div>

              <div className="mt-10 flex flex-col items-center">
                <div className="ovel-custom">Lg</div>
                <div className="ovel-custom">Li</div>
                <div className="ovel-custom">
                  <img
                    src={emial}
                    alt="star"
                    className="cursor-pointer h-6"
                    style={{ fill: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 flex justify-center  w-full">
          <div className="relative z-10">
            {/* Set z-index to ensure inner content stays above */}
            <div
              className={`flex justify-center mt-${
                isBoxClicked ? 0 : 20
              }  border-black`}
            >
              <p className="w-[60rem] relative text-[5rem] overflow-x-hidden overflow-y-auto text-center parallax-effect-glare-scale">
                {textToRead}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
