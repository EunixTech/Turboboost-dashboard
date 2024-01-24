import React, { useEffect, useState } from "react";
import useWidth from "../../../hooks/useWidth";
import Sidebar from "../sidebar/mobile";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "../../../utils/toggle";
import { setDark } from "../../../services/home";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Item = ({ src, title, onClick }) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className="w-[100%] cursor-pointer text-[15px] tracking-wide items-center text-[#85858C] h-[30px] flex"
    >
      {src}

      <span className="translate-y-[1px] ml-[8px]">{title}</span>
    </div>
  );
};

const Prompt = () => {
  const w = useWidth();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  const router = useNavigate();

  const openShopHandler = () =>{
    console.log("wrokingdjg")
    const websiteURL = localStorage.getItem("websiteURL") || "";
    console.log("wrokingdjg", websiteURL)
    if (websiteURL) {
      window.open(`https://${websiteURL}`, '_blank');
    }
  }
  return (
    <div
      style={{
        backgroundColor: dark ? "#111317" : "#fff",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="absolute bg-[#fff] w-[250px] min-h-[10px] z-10 rounded-b-[10px]  top-[43px] right-[5px]  border-r-[1px] border-l-[1px] border-b-[1px] border-l-[#ccc] border-b-[#ccc]"
    >
      <div className="w-[100%] px-[20px] py-[10px]">
        <Item
          onClick={() => {
            router("/settings");
          }}
          src={
            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="user-01">
            <g id="Solid">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5895 10.875C8.1965 10.8753 9.8035 10.8753 11.4105 10.875C11.9555 10.8749 12.3269 10.8748 12.6512 10.932C14.2037 11.2057 15.4193 12.4213 15.693 13.9738C15.7502 14.2981 15.7501 14.6695 15.75 15.2145C15.75 15.3333 15.7536 15.4529 15.7329 15.5704C15.6508 16.0361 15.2861 16.4008 14.8204 16.4829C14.7182 16.5009 14.6106 16.5003 14.5571 16.5001C10.8528 16.4802 7.14725 16.4802 3.44288 16.5001C3.38936 16.5003 3.28177 16.5009 3.17964 16.4829C2.71388 16.4008 2.34922 16.0361 2.26709 15.5704C2.24637 15.4529 2.25001 15.3333 2.24999 15.2145C2.24987 14.6695 2.24978 14.2981 2.30697 13.9738C2.58073 12.4213 3.79627 11.2057 5.34881 10.932C5.67312 10.8748 6.0445 10.8749 6.5895 10.875Z" fill="#DBDBDB"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.875 5.625C4.875 3.34683 6.72182 1.5 9 1.5C11.2782 1.5 13.125 3.34683 13.125 5.625C13.125 7.90317 11.2782 9.75 9 9.75C6.72182 9.75 4.875 7.90317 4.875 5.625Z" fill="#DBDBDB"/>
            </g>
            </g>
            </svg>
            }
          title="Account Settings"
        />
        <Item
          onClick={() => {
            router("/billing");
          }}
          src={ <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="currency-dollar-circle">
          <path id="Solid" fill-rule="evenodd" clip-rule="evenodd" d="M9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75ZM9.75 4.125C9.75 3.71079 9.41421 3.375 9 3.375C8.58579 3.375 8.25 3.71079 8.25 4.125V4.5C6.80025 4.5 5.625 5.67525 5.625 7.125C5.625 8.57475 6.80025 9.75 8.25 9.75H9.75C10.3713 9.75 10.875 10.2537 10.875 10.875C10.875 11.4963 10.3713 12 9.75 12H8.125C7.57271 12 7.125 11.5523 7.125 11C7.125 10.5858 6.78921 10.25 6.375 10.25C5.96079 10.25 5.625 10.5858 5.625 11C5.625 12.3807 6.74429 13.5 8.125 13.5H8.25V13.875C8.25 14.2892 8.58579 14.625 9 14.625C9.41421 14.625 9.75 14.2892 9.75 13.875V13.5C11.1997 13.5 12.375 12.3247 12.375 10.875C12.375 9.42525 11.1997 8.25 9.75 8.25H8.25C7.62868 8.25 7.125 7.74632 7.125 7.125C7.125 6.50368 7.62868 6 8.25 6H9.875C10.4273 6 10.875 6.44772 10.875 7C10.875 7.41421 11.2108 7.75 11.625 7.75C12.0392 7.75 12.375 7.41421 12.375 7C12.375 5.61929 11.2557 4.5 9.875 4.5H9.75V4.125Z" fill="#DBDBDB"/>
          </g>
          </svg>}
          title="Billing"
        />
        <Item
          onClick={() => {
            window.open("https://admin.shopify.com", "_blank");
          }}
          new={true}
          src={
            <svg width="22" height="2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="link-external-01-alt">
            <g id="Solid">
            <path d="M10.5 2.25C10.5 1.83579 10.8358 1.5 11.25 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25L16.5 6.75C16.5 7.16421 16.1642 7.5 15.75 7.5C15.3358 7.5 15 7.16421 15 6.75L15 4.06066L10.2803 8.78033C9.98744 9.07322 9.51256 9.07322 9.21967 8.78033C8.92678 8.48744 8.92678 8.01256 9.21967 7.71967L13.9393 3H11.25C10.8358 3 10.5 2.66421 10.5 2.25Z" fill="#DBDBDB"/>
            <path d="M8.96583 5.85219C9.26284 5.55517 9.41135 5.40667 9.46699 5.23542C9.51594 5.08479 9.51594 4.92253 9.46699 4.7719C9.41135 4.60065 9.26285 4.45214 8.96583 4.15513L8.3818 3.5711L8.35479 3.54399C8.25434 3.443 8.12785 3.31584 7.97309 3.221C7.83888 3.13876 7.69256 3.07815 7.53951 3.04141C7.36301 2.99903 7.18366 2.99951 7.04122 2.99989L7.00294 2.99996L5.81903 2.99996C5.2153 2.99995 4.71703 2.99994 4.31113 3.03311C3.88956 3.06755 3.50203 3.14147 3.13803 3.32694C2.57354 3.61456 2.1146 4.0735 1.82698 4.63799C1.64151 5.00199 1.56759 5.38952 1.53315 5.81109C1.49998 6.21698 1.49999 6.71525 1.5 7.31896V12.1809C1.49999 12.7847 1.49998 13.2829 1.53315 13.6888C1.56759 14.1104 1.64151 14.4979 1.82698 14.8619C2.1146 15.4264 2.57354 15.8854 3.13803 16.173C3.50203 16.3584 3.88956 16.4324 4.31113 16.4668C4.71702 16.5 5.21529 16.5 5.81901 16.5H10.681C11.2847 16.5 11.783 16.5 12.1889 16.4668C12.6104 16.4324 12.998 16.3584 13.362 16.173C13.9265 15.8854 14.3854 15.4264 14.673 14.8619C14.8585 14.4979 14.9324 14.1104 14.9669 13.6888C15 13.2829 15 12.7847 15 12.181V10.997L15.0001 10.9587C15.0004 10.8163 15.0009 10.637 14.9586 10.4605C14.9218 10.3074 14.8612 10.1611 14.779 10.0269C14.6841 9.8721 14.557 9.74562 14.456 9.64517L14.4289 9.61816L13.8449 9.03417C13.5479 8.73716 13.3994 8.58865 13.2281 8.53301C13.0775 8.48406 12.9152 8.48406 12.7646 8.53301C12.5933 8.58865 12.4448 8.73716 12.1478 9.03417L11.341 9.84099C10.4623 10.7197 9.03769 10.7197 8.15901 9.84099C7.28033 8.96231 7.28033 7.53769 8.15901 6.65901L8.96583 5.85219Z" fill="#DBDBDB"/>
            </g>
            </g>
            </svg>
            }
          title="Go to Shopify Admin"
        />
        <Item
          onClick={openShopHandler}
          new={true}
          src={
            <svg width="22" height="2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="google-chrome">
            <g id="Solid">
            <path d="M5.53185 7.57107L3.46951 4.11221C3.30436 3.83523 3.22179 3.69675 3.20318 3.53745C3.18806 3.40809 3.21519 3.24477 3.27131 3.12724C3.34041 2.98251 3.44797 2.89118 3.66309 2.70852C5.10175 1.48694 6.96481 0.75 9 0.75C11.8555 0.75 14.3722 2.20076 15.8532 4.40542C16.0167 4.64884 16.0985 4.77055 16.0913 4.89643C16.0854 4.99987 16.026 5.11123 15.9434 5.17383C15.843 5.25 15.6853 5.25 15.3699 5.25H9C7.4349 5.25 6.09374 6.2088 5.53185 7.57107Z" fill="#DBDBDB"/>
            <path d="M0.75 9C0.75 7.73353 1.03537 6.53372 1.54532 5.46135C1.67099 5.19707 1.73383 5.06492 1.84561 5.00689C1.93747 4.95919 2.06336 4.95329 2.15928 4.99217C2.276 5.03948 2.35663 5.17471 2.51788 5.44516L5.69648 10.7762C6.32964 11.9513 7.57155 12.75 9 12.75C9.15395 12.75 9.30573 12.7407 9.45481 12.7227L7.44861 16.2188C7.28828 16.4981 7.20812 16.6378 7.07832 16.7321C6.97303 16.8086 6.81704 16.8651 6.68718 16.8737C6.52709 16.8844 6.39512 16.8354 6.13118 16.7375C2.98912 15.5721 0.75 12.5475 0.75 9Z" fill="#DBDBDB"/>
            <path d="M8.79513 16.886C8.70221 17.0479 8.81332 17.25 9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 8.53511 17.2115 8.07921 17.1377 7.63529C17.0914 7.35742 17.0683 7.21848 16.9794 7.08478C16.9073 6.97632 16.7807 6.86904 16.6618 6.81572C16.5154 6.75 16.3542 6.75 16.0318 6.75H12.0003C12.471 7.37675 12.75 8.1558 12.75 9C12.75 9.73466 12.5387 10.42 12.1737 10.9985L8.79513 16.886Z" fill="#DBDBDB"/>
            <path d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z" fill="#DBDBDB"/>
            </g>
            </g>
            </svg>
            }
          title="Go to Store"
        />
        {/* <Item
          onClick={() => {
            router("/affiliate");
          }}
          src={"/graphic/navbar/message.svg"}
          title="Affiliates"
        /> */}
        
      </div>
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] cursor-pointer px-[20px] pt-[7px] border-t-[1px] border-[#ccc] pb-[7px] text-[15px] tracking-wide  text-[#85858C] h-[74px] "
      >
        <div className="flex w-[100%] my-[5px] justify-between items-center">
          <div className="flex items-center">
            
<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="moon-01">
<path id="Solid" d="M6.8002 1.80907C6.92881 1.52469 6.86785 1.19039 6.64716 0.969692C6.42647 0.748998 6.09216 0.688047 5.80779 0.816654C2.8267 2.16482 0.75 5.16573 0.75 8.65329C0.75 13.4011 4.59889 17.25 9.34673 17.25C12.8343 17.25 15.8352 15.1733 17.1834 12.1922C17.312 11.9079 17.251 11.5736 17.0303 11.3529C16.8096 11.1322 16.4753 11.0712 16.191 11.1998C15.3011 11.6023 14.3128 11.8267 13.2701 11.8267C9.35068 11.8267 6.17337 8.64934 6.17337 4.72992C6.17337 3.68721 6.39777 2.69893 6.8002 1.80907Z" fill="#DBDBDB"/>
</g>
</svg>

            <span className="translate-y-[1px] ml-[8px]">Dark Mode</span>
          </div>
          <Toggle
            value={!dark}
            setValue={(e) => {
              if (e) {
                localStorage.removeItem("dark");
                dispatch(setDark(false));
              } else {
                localStorage.setItem("dark", "true");
                dispatch(setDark(true));
              }
            }}
          />
        </div>
        <div
          onClick={() => {
            localStorage.removeItem("authToken");
            router("/login-shopify");
          }}
          className="flex w-[100%] items-center"
        >
         
<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="log-out-01">
<g id="Solid">
<path d="M5.81903 1.5H6.75C7.16422 1.5 7.5 1.83579 7.5 2.25C7.5 2.66421 7.16422 3 6.75 3H5.85C5.20757 3 4.77085 3.00058 4.43328 3.02816C4.10447 3.05503 3.93632 3.10372 3.81902 3.16349C3.53677 3.3073 3.3073 3.53677 3.16349 3.81902C3.10372 3.93632 3.05503 4.10447 3.02816 4.43328C3.00058 4.77085 3 5.20757 3 5.85L3 12.15C3 12.7924 3.00058 13.2292 3.02816 13.5667C3.05503 13.8955 3.10372 14.0637 3.16349 14.181C3.3073 14.4632 3.53677 14.6927 3.81902 14.8365C3.93632 14.8963 4.10447 14.945 4.43328 14.9718C4.77085 14.9994 5.20757 15 5.85 15H6.75C7.16422 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.16422 16.5 6.75 16.5H5.81901C5.21529 16.5 4.71702 16.5 4.31113 16.4669C3.88956 16.4324 3.50203 16.3585 3.13803 16.173C2.57354 15.8854 2.1146 15.4265 1.82698 14.862C1.64151 14.498 1.56759 14.1104 1.53315 13.6889C1.49998 13.283 1.49999 12.7847 1.5 12.181V5.81903C1.49999 5.21531 1.49998 4.71702 1.53315 4.31113C1.56759 3.88956 1.64151 3.50203 1.82698 3.13803C2.1146 2.57354 2.57354 2.1146 3.13803 1.82698C3.50203 1.64151 3.88956 1.56759 4.31113 1.53315C4.71703 1.49998 5.2153 1.49999 5.81903 1.5Z" fill="#DBDBDB"/>
<path d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803C11.1768 12.9874 11.1768 12.5126 11.4697 12.2197L13.9393 9.75H6.75C6.33579 9.75 6 9.41421 6 9C6 8.58579 6.33579 8.25 6.75 8.25H13.9393L11.4697 5.78033C11.1768 5.48744 11.1768 5.01256 11.4697 4.71967Z" fill="#DBDBDB"/>
</g>
</g>
</svg>

          <span className="translate-y-[1px] ml-[8px]">Logout</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const w = useWidth();

  useEffect(() => {
    const onPointerDown = () => {
      if (!hover) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });

  const [sideOpen, setSideOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  const dark = useSelector((state) => state.home.dark);

  return (
    <>
      {sideOpen && (
        <Sidebar
          cancel={() => {
            setTransition(false);
            setTimeout(() => {
              setSideOpen(false);
            }, 600);
          }}
          transition={transition}
        />
      )}
      <div
        style={{
          backgroundColor: dark ? "#111317" : "#fff",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] shrink-0 absolute z-10 top-0 left-0 border-b-[1px]  h-[50px] flex items-center justify-between bg-[#fff] "
      >
        {w > 1000 ? (
          <img
            src={dark ? "long.svg" : "/logo-b.png"}
            className="w-[150px] ml-[30px]"
            alt=""
          />
        ) : (
          <img
            onClick={() => {
              setSideOpen(true);
              setTransition(true);
            }}
            src={dark ? "/menuu.svg" : "/graphic/navbar/menu.svg"}
            className="w-[30px] py-[6px] translate-y-[1px] cursor-pointer h-[30px] shrink-0 ml-[10px]"
            alt=""
          />
        )}
        <div className="flex">
          {w > 1000 && (
            <div className="text-[#13DE8E]  cursor-pointer tracking-wide text-[12px] font-medium px-[12px] bg-[#13de8d17] items-center rounded-[3px] h-[35px] flex">
              <span className="mr-[20px]">Websites Connected</span>
              <span>1/1</span>
            </div>
          )}
          <img
            src={
              dark ? "/graphic/navbar/bell-d.svg" : "/graphic/navbar/bell.svg"
            }
            className=" cursor-pointer w-[22px] ml-[22px] mx-[10px]"
            alt=""
          />
          <img
            src={
              dark
                ? "/graphic/navbar/help-circle-d.svg"
                : "/graphic/navbar/help-circle.svg"
            }
            className="cursor-pointer w-[22px] mx-[10px]"
            alt=""
          />
          <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className="flex relative mx-[10px]"
          >
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="flex cursor-pointer"
            >
              <img
                src={
                  dark
                    ? "/graphic/navbar/user-circle-d.svg"
                    : "/graphic/navbar/user-circle.svg"
                }
                className="cursor-pointer w-[22px]"
                alt=""
              />
              <img
                src={dark ? "/graphic/navbar/down-d.svg" : "/down.svg"}
                className="cursor-pointer w-[12px] mx-[5px] mr-[20px] translate-y-[2px]"
                alt=""
              />
            </div>
            {open && <Prompt />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
