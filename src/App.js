import React, { useEffect, useState } from "react";
import DigitAnimation from "./pages/DigitAnimation";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import LandingPages from "./pages/LandingPages";
import { Outlet } from "react-router-dom";
const AnimatedH1 = animated.h1;
function App() {
  const [showPage, setShowPage] = useState(false);
  const showData = () => {
    setShowPage(true);
  };
  return (
    <div className="h-[100vh] bg-black">
      {/* <Outlet /> */}
      {showPage ? <LandingPages /> : <DigitAnimation showData={showData} />}
    </div>
  );
}

export default App;

//Animations
export const DigitAnimatiocn = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  const [showSixth, setShowSixth] = useState(false);

  // Animation configuration for each <h1> element
  const firstSpring = useSpring({
    opacity: showFirst ? 1 : 1,
    fontSize: showFirst ? "340px" : "0px",
    marginBottom: showFirst ? "-90px" : "0px",
    fontFamily: "editorial-thin,sans-serif",
  });

  const secondSpring = useSpring({
    opacity: showSecond ? 1 : 1,
    fontSize: showSecond ? "340px" : "0px",
    marginBottom: showSecond ? "-90px" : "0px",
    fontFamily: "editorial-thin,sans-serif",
  });

  const thirdSpring = useSpring({
    opacity: showThird ? 1 : 1,
    fontSize: showThird ? "340px" : "0px",
    fontFamily: "editorial-thin,sans-serif",
    marginBottom: showThird ? "-90px" : "0px",
  });

  const FourthSpring = useSpring({
    opacity: showFourth ? 1 : 1,
    fontSize: showFourth ? "340px" : "0px",
    fontFamily: "editorial-thin,sans-serif",
    marginBottom: showFourth ? "-90px" : "0px",
  });

  const FifthSpring = useSpring({
    opacity: showFifth ? 1 : 1,
    fontSize: showFifth ? "340px" : "0px",
    fontFamily: "editorial-thin,sans-serif",
    marginBottom: showFifth ? "-90px" : "0px",
  });

  const SixthSpring = useSpring({
    opacity: showSixth ? 1 : 1,
    fontSize: showSixth ? "340px" : "0px",
    fontFamily: "editorial-thin,sans-serif",
    marginBottom: showSixth ? "-90px" : "0px",
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

  // Circle Animation
  const [circles, setCircles] = useState([{ color: "blue", animate: true }]);

  useEffect(() => {
    const handleScroll = () => {
      const lastCircle = circles[circles.length - 1];
      if (lastCircle && lastCircle.animate && circles.length <= 3) {
        // Add condition to check if circles length is less than or equal to 3
        const circleDOM = document.getElementById(
          `circle-${circles.length - 1}`
        );
        if (circleDOM) {
          const { top } = circleDOM.getBoundingClientRect();
          if (top > window.innerHeight) {
            // Determine the next color
            const nextColor = lastCircle.color === "blue" ? "yellow" : "pink";

            // Check if the next color is different from the current color
            const isNextColorAdded = circles.some(
              (circle) => circle.color === nextColor
            );
            if (!isNextColorAdded) {
              setCircles((prevCircles) => [
                ...prevCircles,
                {
                  color: nextColor,
                  animate: false,
                },
              ]);
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependency on circles ensures the effect runs when circles state changes

  return (
    <>
      <div className=" flex  flex-col overflow-y-hidden overflow-x-hidden">
        {showWavingAnimation ? (
          <div className="flex h-[100vh] overflow-y-hidden overflow-x-hidden m-auto">
            {/* <ColorAnimation /> */}
            <div className="h-[55vh] relative">
              {circles.map((circle, index) => (
                <motion.div
                  key={index}
                  id={`circle-${index}`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: circle.color,
                    position: "absolute",
                    top: `${100 + 0 * 60}%`,
                    left: "50%",
                    transformOrigin: "center",
                    opacity: circle.animate ? 1 : 0,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 45 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  onAnimationComplete={() => {
                    const updatedCircles = [...circles];
                    if (updatedCircles?.length <= 3) {
                      const nextColor =
                        updatedCircles[index].color === "blue"
                          ? "yellow"
                          : "pink";
                      updatedCircles.push({ color: nextColor, animate: true });
                      updatedCircles[index].animate = true; // Set the previous color's animate property to false
                      setCircles(updatedCircles);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
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
            <div className="flex justify-between  items-end text-[54px] px-12 gap-x-36  h-[80vh] text-white">
              <AnimatedH1 style={firstSpring}>00</AnimatedH1>
              <AnimatedH1 style={secondSpring}>27</AnimatedH1>
              <AnimatedH1 style={thirdSpring}>11</AnimatedH1>
              <AnimatedH1 style={FourthSpring}>59</AnimatedH1>
              <AnimatedH1 style={FifthSpring}>77</AnimatedH1>
              <AnimatedH1 style={SixthSpring}>99</AnimatedH1>
            </div>
          </>
        )}
      </div>
    </>
  );
};
