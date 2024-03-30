import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ColorAnimation from "./RadicalAnimation";

const AnimatedH1 = animated.h1;

const DigitAnimation = ({ showData }) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  const [showSixth, setShowSixth] = useState(false);

  // Animation configuration for each <h1> element
  const firstSpring = useSpring({
    opacity: showFirst ? 1 : 0,
    fontSize: showFirst ? "300px" : "300px",
    fontFamily: "editorial-thin,sans-serif",

    position: "relative",
    top: "115px",
    // lineHeight: "-8px",
    // height: "120px",
  });

  const secondSpring = useSpring({
    opacity: showSecond ? 1 : 0,
    fontSize: showSecond ? "300px" : "300px",
    // marginBottom: showSecond ? "-90px" : "0px",
    transform: showSecond ? "translateX(10%)" : "translateX(-10%)",

    fontFamily: "editorial-thin,sans-serif",
    position: "relative",
    top: "115px",
  });

  const thirdSpring = useSpring({
    opacity: showThird ? 1 : 0,
    fontSize: showThird ? "300px" : "300px",
    fontFamily: "editorial-thin,sans-serif",
    // marginBottom: showThird ? "-90px" : "0px",
    transform: showThird ? "translateX(10%)" : "translateX(-10%)",

    position: "relative",
    top: "115px",
  });

  const FourthSpring = useSpring({
    opacity: showFourth ? 1 : 0,
    fontSize: showFourth ? "300px" : "300px",
    fontFamily: "editorial-thin,sans-serif",
    // marginBottom: showFourth ? "-90px" : "-90px",
    transform: showFourth ? "translateX(10%)" : "translateX(0%)",

    top: "115px",
    position: "relative",
  });

  const FifthSpring = useSpring({
    opacity: showFifth ? 1 : 0,
    fontSize: showFifth ? "300px" : "300px",
    fontFamily: "editorial-thin,sans-serif",
    // marginBottom: showFifth ? "-90px" : "-90px",
    transform: showFifth ? "translateX(10%)" : "translateX(-10%)",

    top: "115px",
    position: "relative",
  });

  const SixthSpring = useSpring({
    opacity: showSixth ? 1 : 0,
    fontSize: showSixth ? "300px" : "300px",
    fontFamily: "editorial-thin,sans-serif",
    transform: showSixth ? "translateX(10%)" : "translateX(-10%)",
    // marginBottom: showSixth ? "-90px" : "-90px",
    top: "115px",
    position: "relative",
  });
  const [showWavingAnimation, setShowWavingAnimation] = useState(false);
  // Function to handle animation sequence
  const handleAnimation = () => {
    setTimeout(() => setShowFirst(true), 0);
    setTimeout(() => setShowFirst(false), 1000);
    setTimeout(() => setShowSecond(true), 1000);
    setTimeout(() => setShowSecond(false), 2000);
    setTimeout(() => setShowThird(true), 2000);
    setTimeout(() => setShowThird(false), 3000);
    setTimeout(() => setShowFourth(true), 3000);
    setTimeout(() => setShowFourth(false), 4000);
    setTimeout(() => setShowFifth(true), 4000);
    setTimeout(() => setShowFifth(false), 5000);
    setTimeout(() => setShowSixth(true), 5000);
    setTimeout(() => setShowSixth(false), 6000);
    setTimeout(() => setShowWavingAnimation(true), 6000);
  };

  // Trigger animation when the component mounts
  React.useEffect(() => {
    handleAnimation();
  }, []);
  const renderNumber = () => {
    return (
      <>
        <div className=" w-full flex px-14 py-4  text-whiteflex justify-evenly pt-12">
          <div className=" w-1/2   flex justify-between ">
            <h3 className="text-[#7b7b7b] text-[24px]">
              Knowing by doing
              <br /> --SavoirFaire
            </h3>
          </div>
          <div className=" w-1/2 text-[#7b7b7b] flex justify-evenly text-[24px] pt-4">
            <h3>
              Digital & Braning Design
              <br /> PhotoGraph & Film Production
            </h3>
            <h3>
              Foundation in 2020
              <br /> Brookly.NY
            </h3>
          </div>
        </div>
        <div className="flex justify-between  items-end px-14 h-[80vh] text-white">
          <AnimatedH1 style={firstSpring}>00</AnimatedH1>
          <AnimatedH1 style={secondSpring}>27</AnimatedH1>
          <AnimatedH1 style={thirdSpring}>11</AnimatedH1>
          <AnimatedH1 style={FourthSpring}>59</AnimatedH1>
          <AnimatedH1 style={FifthSpring}>77</AnimatedH1>
          <AnimatedH1 style={SixthSpring}>99</AnimatedH1>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" flex  flex-col overflow-hidden">
        {showWavingAnimation ? (
          <div className="flex h-[100vh] m-auto">
            <ColorAnimation showData={showData} />
          </div>
        ) : (
          <>{renderNumber()}</>
        )}
      </div>
    </>
  );
};

export default DigitAnimation;
