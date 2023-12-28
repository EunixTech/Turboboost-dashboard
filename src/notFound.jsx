import React from "react";

export default function NotFound() {
  return (
    <>
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
          className="w-[645px] h-[382px]  shrink-0"
          alt=""
        />
      </div>

      <p className="notfound-txt">Looks like you typed too fast...</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="return-btn">Return to home page</button>
      </div>
    </>
  );
  
}
