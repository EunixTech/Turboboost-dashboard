import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

import TitleManager from "../components/TitleManager";
import AnimatedLoader from "../components/loader/AnimatedLoader";

import { GetAxiosConfig } from "../utils/axiosConfig.js";

// const Button = () => {
//   const dark = useSelector((state) => state.home.dark);
//   const handleCommingSoonMsg = () =>{
//     toast.dismiss();
//     return   toast.info("Coming Soon");
//   }
//   return (
//     <div
//     onClick={handleCommingSoonMsg}
//       className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

//         h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
//     >
//       <p
//         className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${
//           dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
//         } rounded-[4px] hover:bg-[#2fe49c] active:translate-y-[0px] font-bold active:border-0  translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide `}
//       >
//         Add New Website
//       </p>
//     </div>
//   );
// };




// const Button1 = ({ onClick }) => {
//   const dark = useSelector((state) => state.home.dark);
//   return (
//     <div
//       onClick={() => {
//         onClick();
//       }}
//       className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

//         h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
//     >
//       <p
//         className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${
//           dark ? "bg-[#000]" : "bg-[#000]"
//         } rounded-[4px] active:translate-y-[0px] hover:bg-[#333345] active:border-0 translate-y-[-3px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
//       >
//         Browse Connectors
//       </p>
//     </div>
//   );
// };

const TableHeader = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] h-[32px]  border-y-[1px] border-[#EBEBEB]   flex"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[50%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
       
      >
        
        Site Name
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[50%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center  px-[15px]"
      >
        Site URL
      </div>
      {/* <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[20%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Site ID
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[17%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Site Secret
      </div> */}
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[20%] font-medium text-[#0a0a187b] text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Status
      </div>
      {/* <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[13%] font-medium text-[#0a0a187b] justify-center text-[12px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        Actions
      </div> */}
    </div>
  );
};

const Status = ({ i }) => {
  return (
    <div
      className="h-[19px] flex items-center px-[8.5px] justify-between rounded-[23px] "
      style={{
        backgroundColor:
          i === 1 ? "#38f8ab31" : i === 2 ? "#ffcc6538" : "#ff465c38",
      }}
    >
      <div
        className="w-[5px] h-[5px] shrink-0 rounded-[50%]"
        style={{
          backgroundColor:
            i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      ></div>
      <p
        className="text-[12px] tracking-wide ml-[5px]"
        style={{
          color: i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      >
        {i === 1 ? "Active" : i === 2 ? "Incomplete" : "Disconnected"}
      </p>
    </div>
  );
};

const TableItem = ({ name, site_url, site_id, site_secret, status, onDelete }) => {
  const dark = useSelector((state) => state.home.dark);
  const [clipboardHover, setClipboardHover] = useState(false);
  const [copyText, setCopyText] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleTrashIconClick = () => {
    // Call your function to trash the item here
    // For example:
    onDelete();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true); // Update copy success state
        setTimeout(() => {
          setCopySuccess(false); // Reset copy success state after a few seconds
        }, 3000); // Reset after 3 seconds (adjust as needed)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] h-[40px]  border-b-[1px] border-[#ebebeb]   flex"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[50%] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
       
      >
        {name}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[50%] overflow-hidden pr-[10px] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        https://{site_url}
      </div>
      {/* Site ID */}
      {/* <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        onClick={() => {
          if (clipboardHover) {
            // Copy the Site ID when the clipboardHover state is true
            copyToClipboard(site_id);
          }
        }}
        onMouseOver={() => {
          setClipboardHover(true);
        }}
        onMouseLeave={() => {
          setClipboardHover(false);
          setCopyText(false);
        }}
        className="w-[17%] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        {copyText ? site_id : "••••••••••"}
        <div className="flex ml-[10px] cursor-pointer translate-y-[-2px]">
          <img
            src={
              clipboardHover
                ? "/graphic/connect-website/copy1.svg"
                : "/graphic/connect-website/copy.svg"
            }
            className="w-[12px]"
            alt=""
          />
          <p
            style={{
              color: clipboardHover ? "#0A0A18" : "#85858C",
            }}
            className="text-[#85858C] ml-[1px]"
          >
            Copy
          </p>
        </div>
      </div> */}

      {/* Site Secret */}
      {/* <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        onClick={() => {
          if (clipboardHover) {
            // Copy the Site Secret when the clipboardHover state is true
            copyToClipboard(site_secret);
          }
        }}
        onMouseOver={() => {
          setClipboardHover(true);
        }}
        onMouseLeave={() => {
          setClipboardHover(false);
          setCopyText(false);
        }}
        className="w-[17%] font-medium text-[#000] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]"
      >
        {copyText ? site_secret : "••••••••••"}
        <div className="flex ml-[10px] cursor-pointer translate-y-[-2px]">
          <img
            src={
              clipboardHover
                ? "/graphic/connect-website/copy1.svg"
                : "/graphic/connect-website/copy.svg"
            }
            className="w-[12px]"
            alt=""
          />
          <p
            style={{
              color: clipboardHover ? "#0A0A18" : "#85858C",
            }}
            className="text-[#85858C] ml-[1px]"
          >
            Copy
          </p>
        </div>
      </div> */}

      <div className="w-[20%] font-medium text-[#0a0a187b] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]">
        <Status i={1} />
      </div>
      {/* <div className="w-[13%] flex  items-center justify-center font-medium text-[#0a0a187b] text-[14px] translate-y-[1.5px] h-[100%] flex items-center px-[15px]">
        <img
          src="/graphic/status/trash.svg"
          className="w-[15px] hover:opacity-70 cursor-pointer h-[15px]"
          alt=""
          onClick={handleTrashIconClick}
        />
      </div> */}
    </div>
  );
};

const Table = ({ websites, deleteWebsite, dark }) => (
  <div className="w-[100%] mt-[15px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool">
    <div className="laptop:min-w-[500px] laptop:w-[100%]">
      <TableHeader dark={dark} />
      {websites.length && websites.map((website, i) => (
        <TableItem
          key={i}
          {...website}
          dark={dark}
          onDelete={() => deleteWebsite(i)}
        />
      ))}
    </div>
  </div>
);
const Connector1 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#433E3E] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/1.png"
        className="w-[60px]"
        alt=""
      />
    </div>
  );
};
const Connector2 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#29B6F6] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/2.png"
        className="w-[60px]"
        alt=""
      />
    </div>
  );
};
const Connector3 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#7F54B3] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/3.png"
        className="w-[50px]"
        alt=""
      />
    </div>
  );
};
const Connector4 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#F36221] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/4.png"
        className="w-[35px]"
        alt=""
      />
    </div>
  );
};
const Connector5 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#96BF3D] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/5.png"
        className="w-[32px]"
        alt=""
      />
    </div>
  );
};
const Connector6 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#282431] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/6.png"
        className="w-[55px]"
        alt=""
      />
    </div>
  );
};
const Connector7 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#4F5B93] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/7.png"
        className="w-[80px]"
        alt=""
      />
    </div>
  );
};

const ButtonAdd = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  const handlingToast = () =>{
    toast.dismiss();
    // return toast.warning("Commign Soon");
  }
  return (
    <div
      onClick={handlingToast}
      className={`w-[110px] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}
        
        h-[40px]   cursor-pointer rounded-[4px] ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb] "
        } flex items-center justify-center`}
    >
      <p
       style={{
        color: dark ? "#fff" : "#000",
      }}
        className={`text-[${
          false ? "#fff" : "#000"
        }]   f2 text-[14px]  border-[1px]  ${
          dark ? "border-[##808080]" : "border-[##808080]"
        } 
        ${
          dark ? "bg-[##808080]" : "bg-[##808080]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[##808080]  active:border-[1px] translate-y-[-1px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Coming Soon
      </p>
    </div>
  );
};

const Connector = ({ title, sub, connect }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] items-center h-[99px] mb-[10px] overflow-hidden rounded-[5px] border-[1px] border-[#ebebeb] flex"
    >
      {connect}
      <div className="w-[100%] h-[100%] flex items-center mobile:px-[10px] laptop:px-[22px] justify-between">
        <div>
          <h1
            style={{ color: dark ? "#fff" : "#000" }}
            className="mobile:text-[11px] laptop:text-[20px] font-bold tracking-wide"
          >
            {title}
          </h1>
          <p
            style={{
              color: dark ? "#ffffff74" : "#0a0a187e",
            }}
            className="text-[14px] text-[#0a0a1878]  font-bold tracking-wide "
          >
            {sub}
          </p>
        </div>
        {/* <div className="w-[80px] h-[32px] hover:bg-[#2FE49C] bg-[#38F8AC] text-[#000] font-bold rounded-[3px] flex items-center justify-center text-[11px] cursor-pointer">
          Connect
        </div> */}
        <ButtonAdd />
      </div>
    </div>
  );
};

const BrowseConnectors = ({ cancel }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[100vh] fixed z-50 left-0 laptop:px-[0] mobile:px-[10px] bg-[#00000074] flex items-center justify-center py-[50px]">
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          backgroundColor: dark ? "#111317" : "#fff",
        }}
        className="laptop:w-[1095px] max-h-[1000px] mobile:w-[100%] flex flex-col h-[100%] rounded-[13px] bg-[#fff] relative border-[1px] border-[#ebebeb] mobile:px-[10px] laptop:px-[30px]"
      >
        <div className="flex items-center shrink-0 justify-between mt-[25px]">
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[24px]  font-bold "
          >
            Website Connectors
          </h1>
          <img
            onClick={() => {
              cancel();
            }}
            src="/graphic/connect-website/cross.svg"
            className="cursor-pointer w-[15px]"
            alt=""
          />
        </div>
        <div className="w-[100%] h-[100%] pt-[20px] overflow-y-auto scroll-hidden">
          <p
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[16px] font-bold "
          >
            Install an extension
          </p>
          <div className="flex justify-between items-center mt-[3px] mb-[15px]">
            <p
              style={{
                color: dark ? "#ffffff74" : "#0a0a187e",
              }}
              className="text-[14px] text-[#0a0a1878] font-bold "
            >
              Suitable if you are running any of the following platforms
            </p>
            <div className="flex items-center justify-center">
              <p
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[13px] text-[#000] tracking-wide font-bold "
              >
                Level:
              </p>
              <div className="bg-[#38f8ab3a] text-[#0FE38F] font-bold px-[12.5px] translate-y-[-1px] rounded-[12px] ml-[4px] py-[1px] text-[11px]">
                Easy
              </div>
            </div>
          </div>
          <Connector
            sub="The All-In-One Speed Optimization Plugin"
            title="TurboBoost for WordPress"
            connect={<Connector1 />}
          />
          <Connector
            sub="Official TurboBoost plugin for OpenCart"
            title="TurboBoost for OpenCart"
            connect={<Connector2 />}
          />
          <Connector
            sub="Official TurboBoost plugin for WooCommerce"
            title="TurboBoost for WooCommerce"
            connect={<Connector3 />}
          />
          <Connector
            sub="Official TurboBoost plugin for Magento"
            title="TurboBoost for Magento"
            connect={<Connector4 />}
          />
          {/* <Connector
            sub="Official TurboBoost app for Shopify"
            title="TurboBoost for Shopify"
            connect={<Connector5 />}
          /> */}
          <Connector
            sub="Official TurboBoost plugin for BigCommerce"
            title="TurboBoost for BigCommerce"
            connect={<Connector6 />}
          />
          <div className="w-[100%] mt-[20px]">
            <p
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[12px] font-bold "
            >
              Integrate an SDK
            </p>
            <div className="flex justify-between items-center mt-[3px] mb-[15px]">
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] text-[#0a0a1878] font-bold "
              >
                Suitable for custom platforms that run in any of the following
                programming languages
              </p>
              <div className="flex items-center justify-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[13px] text-[#000] tracking-wide font-bold "
                >
                  Level:
                </p>
                <div className="bg-[#ffcc6542] text-[#FFCB65] font-bold px-[12.5px] translate-y-[-1px] rounded-[12px] ml-[4px] py-[1px] text-[11px]">
                  Medium
                </div>
              </div>
            </div>
            <Connector
              sub="Integrate TurboBoost into your PHP based website"
              title="TurboBoost PHP SDK (Limited Support)"
              connect={<Connector7 />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const ConnectWebsite = () => { 
  const dark = useSelector((state) => state.home.dark);
  const [connectedWebsiteData, updateConnectedWebsiteData] = useState([]);
  const [loader, toggleLoader] = useState(false)
  const [show, setShow] = useState(false);

  const fetchConnectedWebsiteData = async () => {
 
      try {
        toggleLoader(true)
        const res = await GetAxiosConfig(`api/dashboard/fetch-connected-website-data`);
        
        const resJSON = res?.data;

        if(resJSON.status === 200){
          const dataArr = resJSON?.conectedWebsite;
          updateConnectedWebsiteData(dataArr)
          toggleLoader(false)
          
        } else if(resJSON.status === 403){
     
          localStorage.removeItem('authToken');
          window.location.replace('/login-shopify');
  
      }else{
        toggleLoader(false);
        return toast.error("Please try again");
      }
      
      } catch (error) {
        toggleLoader(false)
        if (error?.response?.status === 401) {
          localStorage.removeItem('authToken');
          window.location.replace('/login-shopify');
        }
      }
  };



  useEffect(() => {
    fetchConnectedWebsiteData();
  }, [])
  

  return (
    <>
     {show && (
        <BrowseConnectors
          cancel={() => {
            setShow(false);
          }}
        />
      )}
    {
      loader ? <AnimatedLoader /> :
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <TitleManager title="Connect Website" conicalURL="connect-website" />
 
        <div className="w-[100%] h-[50px] shrink-0"></div>
        <div
          style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
          className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] laptop:px-[80px] mobile:px-[10px] desktop:px-[80px]"
        >
          <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
            <div className="w-[100%] pt-[30px]">
              <h1
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[24px] f2 font-bold tracking-wide"
              >
                Connect Website
              </h1>
            </div>
            <div className="w-[100%] mt-[18px]">
              <div
                style={{
                  backgroundColor: dark ? "#111317" : "#fff",
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="mobile:w-[100%] pb-[15px] pt-[14px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
              >
                <div className="flex px-[15px] justify-between items-center">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] f2 text-[14px] font-medium"
                  >
                    {connectedWebsiteData.length} Connection
                    {connectedWebsiteData.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <Table websites={connectedWebsiteData}  />
              </div>
              {/* <div className="mobile:w-[100%] mobile:mt-[10px] laptop:mt-[0px] laptop:w-[26%]">
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%] px-[15px] py-[14px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="desktop:text-[20px] mobile:text-[20px] font-bold tracking-wide"
                  >
                    Add New Website
                  </h1>
                  <Formik
                    initialValues={{
                      url: "",
                      name: "",
                    }}
                    // validationSchema={validationSchema} // Use the validationSchema here
                    // onSubmit={(values, { resetForm }) => {
                      // Handle form submission here
                      // addWebsiteToList({
                      //   name: values.name,
                      //   url: values.url,
                      //   id: "NewWebsiteID123", // Replace with the actual ID
                      //   secret: "NewWebsiteSecret", // Replace with the actual secret
                      //   status: 1, // Replace with the actual status
                      // });

                      // Reset the form after submission
                      // resetForm();
                    //  return toast.success("Comming soon")
                    // }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="w-[100%] mt-[4px]">
                          <p
                            style={{
                              color: dark ? "#ffffff74" : "#0a0a187e",
                            }}
                            className="desktop:text-[14px] mobile:text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                          >
                            Website URL
                          </p>
                          <Field
                            type="text"
                            name="url" 
                            placeholder="e.g. https://mywebsite.com"
                            className={`w-[100%] h-[34px] bg-transparent rounded-[4px] border-[1px] border-${
                              dark ? "#1F2329" : "#ebebeb"
                            } outline-none mt-[5px] desktop:text-[12px] mobile:text-[11px] font-medium px-[10px] ${
                              errors.url && touched.url ? "border-red-500" : ""
                            }`}
                          />
                          <ErrorMessage
                            name="url"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                        <div className="w-[100%] mt-[8px]">
                          <p
                            style={{
                              color: dark ? "#ffffff74" : "#0a0a187e",
                            }}
                            className="text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                          >
                            Website Name
                          </p>
                          <Field
                            type="text"
                            name="name"
                            placeholder="e.g. My Website"
                            className={`w-[100%] h-[34px] bg-transparent rounded-[4px] border-[1px] border-${
                              dark ? "#1F2329" : "#ebebeb"
                            } outline-none mt-[5px] desktop:text-[12px] mobile:text-[11px] font-medium px-[10px] ${
                              errors.name && touched.name
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                        <Button />
                      </Form>
                    )}
                  </Formik>
                </div>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%] px-[15px] py-[14px] mt-[10px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="desktop:text-[20px] mobile:text-[15px] font-bold tracking-wide"
                  >
                    Download Connectors
                  </h1>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] text-[#0a0a1889] my-[5px] font-medium"
                  >
                    We have a collection of free connectors for different
                    platforms. If we don’t have your platform, you can directly
                    integrate with SDK/API. Follow this button to browse the
                    available connectors.
                  </p>
                  <Button1
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    }
      {/* <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <TitleManager title="Connect Website" conicalURL="connect-website" />
 
        <div className="w-[100%] h-[50px] shrink-0"></div>
        <div
          style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
          className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] laptop:px-[80px] mobile:px-[10px] desktop:px-[80px]"
        >
          <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
            <div className="w-[100%] pt-[30px]">
              <h1
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[24px] f2 font-bold tracking-wide"
              >
                Connect Website
              </h1>
            </div>
            <div className="w-[100%] mt-[18px] laptop:flex justify-between">
              <div
                style={{
                  backgroundColor: dark ? "#111317" : "#fff",
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="laptop:w-[73%] mobile:w-[100%] pb-[5px] pt-[14px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
              >
                <div className="flex px-[15px] justify-between items-center">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[#0a0a187e] f2 text-[14px] font-medium"
                  >
                    {connectedWebsiteData.length} Connection
                    {connectedWebsiteData.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <Table websites={connectedWebsiteData}  />
              </div>
              <div className="mobile:w-[100%] mobile:mt-[10px] laptop:mt-[0px] laptop:w-[26%]">
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%] px-[15px] py-[14px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="desktop:text-[20px] mobile:text-[20px] font-bold tracking-wide"
                  >
                    Add New Website
                  </h1>
                  <Formik
                    initialValues={{
                      url: "",
                      name: "",
                    }}
                    // validationSchema={validationSchema} // Use the validationSchema here
                    // onSubmit={(values, { resetForm }) => {
                      // Handle form submission here
                      // addWebsiteToList({
                      //   name: values.name,
                      //   url: values.url,
                      //   id: "NewWebsiteID123", // Replace with the actual ID
                      //   secret: "NewWebsiteSecret", // Replace with the actual secret
                      //   status: 1, // Replace with the actual status
                      // });

                      // Reset the form after submission
                      // resetForm();
                    //  return toast.success("Comming soon")
                    // }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="w-[100%] mt-[4px]">
                          <p
                            style={{
                              color: dark ? "#ffffff74" : "#0a0a187e",
                            }}
                            className="desktop:text-[14px] mobile:text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                          >
                            Website URL
                          </p>
                          <Field
                            type="text"
                            name="url" 
                            placeholder="e.g. https://mywebsite.com"
                            className={`w-[100%] h-[34px] bg-transparent rounded-[4px] border-[1px] border-${
                              dark ? "#1F2329" : "#ebebeb"
                            } outline-none mt-[5px] desktop:text-[12px] mobile:text-[11px] font-medium px-[10px] ${
                              errors.url && touched.url ? "border-red-500" : ""
                            }`}
                          />
                          <ErrorMessage
                            name="url"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                        <div className="w-[100%] mt-[8px]">
                          <p
                            style={{
                              color: dark ? "#ffffff74" : "#0a0a187e",
                            }}
                            className="text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                          >
                            Website Name
                          </p>
                          <Field
                            type="text"
                            name="name"
                            placeholder="e.g. My Website"
                            className={`w-[100%] h-[34px] bg-transparent rounded-[4px] border-[1px] border-${
                              dark ? "#1F2329" : "#ebebeb"
                            } outline-none mt-[5px] desktop:text-[12px] mobile:text-[11px] font-medium px-[10px] ${
                              errors.name && touched.name
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                       
                      </Form>
                    )}
                  </Formik>
                </div>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%] px-[15px] py-[14px] mt-[10px] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="desktop:text-[20px] mobile:text-[15px] font-bold tracking-wide"
                  >
                    Download Connectors
                  </h1>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] text-[#0a0a1889] my-[5px] font-medium"
                  >
                    We have a collection of free connectors for different
                    platforms. If we don’t have your platform, you can directly
                    integrate with SDK/API. Follow this button to browse the
                    available connectors.
                  </p>
                  <Button1
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default ConnectWebsite;
