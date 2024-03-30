import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ColorAnimation = ({ showData }) => {
  const [loaded, setLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false); // Initially hide the image
  const [showImage2, setShowImage2] = useState(false); // Initially hide the image
  const [showImage3, setShowImage3] = useState(false); // Initially hide the image

  useEffect(() => {
    // Simulate loading time (you can replace it with actual loading logic)
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (loaded) {
      // Show the image after it's loaded
      setShowImage(true);
    }
  }, [loaded]);

  const handleAnimationComplete = () => {
    setShowImage(false); // Hide the image after animation is completed
    setShowImage2(true);
  };

  const handleAnimationComplete2 = () => {
    setShowImage2(false);
    setShowImage3(true);
  };

  const handleAnimationComplete3 = () => {
    showData();
    setShowImage2(false);
  };

  return (
    <div className="h-[55vh] w-full relative bg-[#cdfd50]">
      <div className="flex justify-center items-center w-screen bg-[#cdfd50] h-[100vh]">
        {showImage && (
          <motion.img
            src="https://www.savoirfaire.nyc/_nuxt/star-black.f0035203.svg"
            alt="Email Icon"
            initial={{ scale: 0 }} // Initial scale of the image
            animate={{ scale: 35 }} // Target scale of the image when loaded
            transition={{ duration: 1, ease: "easeInOut" }} // Duration of the animation
            style={{ visibility: loaded ? "visible" : "hidden" }} // Hide image until loaded
            onAnimationComplete={handleAnimationComplete} // Callback when animation is complete
          />
        )}
        {showImage2 && (
          <motion.img
            src="https://www.savoirfaire.nyc/_nuxt/star-black.f0035203.svg"
            alt="Email Icon"
            initial={{ scale: 0 }} // Initial scale of the image
            animate={{ scale: 35 }} // Target scale of the image when loaded
            transition={{ duration: 1, ease: "easeInOut" }} // Duration and easing of the animation
            style={{
              visibility: loaded ? "visible" : "hidden",
              filter:
                "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
            }} // Combine all styles into a single object
            onAnimationComplete={handleAnimationComplete2}
            // Callback when animation is complete
          />
        )}
        {showImage3 && (
          <motion.img
            src="https://www.savoirfaire.nyc/_nuxt/star-black.f0035203.svg"
            alt="Email Icon"
            initial={{ scale: 0 }} // Initial scale of the image
            animate={{ scale: 35 }} // Target scale of the image when loaded
            transition={{ duration: 1, ease: "easeInOut" }} // Duration of the animation
            style={{ visibility: loaded ? "visible" : "hidden" }} // Hide image until loaded
            onAnimationComplete={handleAnimationComplete3} // Callback when animation is complete
          />
        )}
      </div>
    </div>
  );
};

export default ColorAnimation;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const ColorAnimation = ({ showData }) => {
//   const [circles, setCircles] = useState([{ color: "blue", animate: true }]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const lastCircle = circles[circles.length - 1];
//       if (lastCircle && lastCircle.animate && circles.length <= 3) {
//         // Add condition to check if circles length is less than or equal to 3
//         const circleDOM = document.getElementById(
//           `circle-${circles.length - 1}`
//         );
//         if (circleDOM) {
//           const { top } = circleDOM.getBoundingClientRect();
//           if (top > window.innerHeight) {
//             // Determine the next color
//             const nextColor = lastCircle.color === "blue" ? "yellow" : "pink";

//             // Check if the next color is different from the current color
//             const isNextColorAdded = circles.some(
//               (circle) => circle.color === nextColor
//             );
//             if (!isNextColorAdded) {
//               setCircles((prevCircles) => [
//                 ...prevCircles,
//                 {
//                   color: nextColor,
//                   animate: false,
//                 },
//               ]);
//             }
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Dependency on circles ensures the effect runs when circles state changes

//   // console.log("circle", circles);
//   return (
//     <div className="h-[55vh] relative">
//       {circles.map((circle, index) => (
//         <motion.div
//           key={index}
//           id={`circle-${index}`}
//           style={{
//             width: "50px",
//             height: "50px",
//             borderRadius: "50%",
//             backgroundColor: circle.color,
//             position: "absolute",
//             top: `${100 + 0 * 60}%`,
//             left: "50%",
//             transformOrigin: "center",
//             opacity: circle.animate ? 1 : 0,
//           }}
//           initial={{ scale: 0, rotate: 0 }}
//           animate={{ scale: 100 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           onAnimationComplete={() => {
//             const updatedCircles = [...circles];
//             if (updatedCircles?.length <= 3) {
//               const nextColor =
//                 updatedCircles[index].color === "blue" ? "yellow" : "pink";
//               updatedCircles.push({ color: nextColor, animate: true });
//               updatedCircles[index].animate = true; // Set the previous color's animate property to false
//               setCircles(updatedCircles);
//             } else {
//               showData();
//             }
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ColorAnimation;
