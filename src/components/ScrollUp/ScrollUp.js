import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowButton(false);
  };
  return (
    <div>
      {showButton && (
        <div style={{ position: "fixed", bottom: 10, right: 10 }}>
          <button
            onClick={scrollToTopHandler}
            style={{
              backgroundColor: "black",
              color: "#fff",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Scroll To Top
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
