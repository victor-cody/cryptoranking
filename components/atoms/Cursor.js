import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const CursolBall = useRef();
  const CursolOutline = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        CursolBall.current.style.top = e.pageY + "px";
        CursolBall.current.style.left = e.pageX + "px";

        CursolOutline.current.style.top = e.pageY + "px";
        CursolOutline.current.style.left = e.pageX + "px";
      });

      window.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
          CursolOutline.current.classList.add("cursor-mousedown");
        }
      });

      window.addEventListener("mouseup", () => {
        CursolOutline.current.classList.remove("cursor-mousedown");
      });
    }
  });

  return (
    <>
      <div ref={CursolBall} className="cursor-ball"></div>
      <div ref={CursolOutline} className="cursor-outline"></div>
    </>
  );
};

export default Cursor;
