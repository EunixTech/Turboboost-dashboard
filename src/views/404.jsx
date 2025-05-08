import React from "react";
import TitleManager from "../components/TitleManager";
import "../css/404.css";
import useWidth from "../hooks/useWidth";
export default function NotFound() {
  const widthSize = useWidth();
  return (
    <>
      <TitleManager title="404" conicalURL="*" />

      <div className={widthSize < 1000 ? "main-wrapper-404" : "mobile-404-main-wrapper"} >

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <img
          src="/graphic/notfound/notfound.svg"
          className={`w-[645px] ${widthSize < 1000 ? "": "h-[382px]"}   shrink-0`}
          alt=""
        />
      </div>

      <p className={ widthSize < 1000 ? "notfound-txt-mobile": "notfound-txt"}>Looks like you typed too fast...</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="return-btn">Return to home page</button>
      </div>
    </div >

    </>
  );

}
