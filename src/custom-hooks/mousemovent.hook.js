import React, { useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //set the event listener once, other than setting up a listener for every movt
  useEffect(() => {
    const handleMouseMovement = function(e) {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    };

    document.addEventListener("mousemove", handleMouseMovement);

    //on component unmount, remove the listener
    return function() {
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return position;
};

export default useMousePosition;
