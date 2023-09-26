import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";

export default function MobileViewNavigator({ label, list, w, change }) {
    const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });
  const dark = useSelector((state) => state.home.dark);

  return (
    <div className="h-[100%] w-[100%]" style={{ width: w }}>
      <div className="w-[100%] relative border-[1px]  border-[#ebebeb]  text-[12px] font-medium  h-[34px]">
        <div
          onClick={() => {
            setClicked(true);
          }}
          className="w-[100%] cursor-pointer px-[10px] h-[34px] flex justify-between items-center"
        >
          <p
            style={{
              color: dark ? "#ffffff74" : "#0a0a187e",
              borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
            }}
            className="text-[12px] font-bold tracking-wide  text-[#000]"
          >
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div className="w-[100%] min-h-[10px] rounded-[2px] px-[5px] py-[5px] border-[1px] border-[#ebebeb] absolute z-50 top-[40px] bg-[#fff]">
            {list.map((item, i) => {
              return (
                <div
                  onMouseOver={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={i}
                  style={{
                    backgroundColor: i === curr ? "#222" : "#fff",
                    color: i === curr ? "#fff" : "#000",
                  }}
                  onClick={() => {
                    change(i);
                    setClicked(false);
                    setCurr(i);
                  }}
                  className="w-[100%] rounded-[2px] h-[27px] mb-[3px] flex items-center justify-center text-[11px] cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
