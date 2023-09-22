import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";

export default function InputFields({
    inputClass,
    type,
    onChangeHandler = () => {},
    value,
    inputName,
    wrapperClass,
    labelClass,
    labelText,
    list = [],
    class1 = ""

}) {

    const dark = useSelector((state) => state.home.dark);

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
  

    return (

        <div className="h-[100%]">
        <p
          style={{ color: dark ? "#ffffff74" : "#0a0a187e" }}
          className={labelClass}
        >
          {labelText}
        </p>
        {
                (() => {
                    if(type === "text"){
                        return <input
                        type={type}
                        className={inputClass}
                        onChange={onChangeHandler}
                        name={inputName}
                        value={value}
                        style={{
                            borderColor: dark ? "#1F2329" : "#ebebeb",
                            color: dark ? "#fff" : "#000",
                            backgroundColor: dark ? "#111317" : "#fff",
                          }}
                    />
        
                    } 
                    else if(type === "dropdown"){
                        return <div 
                            style={{ borderColor: dark ? "#1F2329" : "#ebebeb"}}
                            className="w-[100%] relative   text-[12px] font-medium mt-[5px] h-[38px]"
                            >

                        <div onClick={() => { setClicked(true)}}
                            style={{ borderColor: dark ? "#1F2329" : "#ebebeb"}}
                            className={`${class1}  w-[100%] cursor-pointer border-[1px] rounded-[4px]  border-[#ebebeb] px-[10px] h-[38px] flex justify-between items-center`}
                        >
                        <p
                            style={{ color: dark ? "#fff" : "#000"}}
                            className="text-[12px] font-bold tracking-wide  text-[#000]"
                        >
                            {list[curr]}
                        </p>

                        <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
                    </div>

                        {clicked && (

                            <div
                                onMouseOver={() => { setHover(true)}}
                                onMouseLeave={() => {setHover(false)}}
                                style={{
                                    color: dark ? "#fff" : "#000",
                                    backgroundColor: dark ? "#111317" : "#fff",
                                    borderColor: dark ? "#1F2329" : "#ebebeb",
                                }}
                                className="w-[100%] min-h-[10px] rounded-b-[4px] max-h-[200px] scroll-bar-cool111 overflow-y-auto  border-t-0 border-[1px] border-[#ebebeb] absolute z-50 top-[33px] bg-[#fff]"
                            >

                            {list.map((item, i) => {
                                return (
                                    <div
                         
                                        key={i}
                                        style={{
                                            backgroundColor:
                                            i === curr  ? dark  ? "#000" : "#ebebeb" : dark ? "#111317" : "#fff",
                                        }}
                                        onClick={() => { setCurr(i)}}
                                        className="w-[100%] h-[30px] mb-[0px] flex items-center  px-[10px] text-[11px] cursor-pointer"
                                    >
                                    {item}
                                </div>
                              );
                            })}

                          </div>
                        )}

                      </div>
                    }

                })()}

        </div>
        
    );
}
