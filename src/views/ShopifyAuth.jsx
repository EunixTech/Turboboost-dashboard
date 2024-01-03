import React, { useState } from "react";

import getFetchConfig from "../utils/getFetchConfig";
import appURLs from "../appURL";
import toast from "react-hot-toast";

const ShopifyAuth = () => {
  const fetchConfig = getFetchConfig();
  const appURL = appURLs();

  const [domain, updateDomain] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!domain) toast.error("Please provide domain name");
    else if (!/^(http|https):\/\/[^ "]+$/.test(domain)) {
      toast.error("Invalid domain name format");
      return;
    }
    // rest of the code
      try {
        const res = await fetch(
          `${appURL}/api/shopify/shopify-auth`,
          {
            ...fetchConfig,
          method: "POST",
          body: JSON.stringify({
            shop_name:"turboboost-dev.myshopify.com"
          })
          }
        );

        const resJSON = await res.json();
        const redirectURL = resJSON.redirectURI;
        if(resJSON.status === 200){
          window.location.href = redirectURL;
        } else {
          return toast.error(resJSON.message)
        }

      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
  };


  return (
    <>
      <div className="main">

        <div className="shapes-verticals">
          <img src="/vertical-1.png" alt="" className="vertical-1"></img>
          <img src="/vertical-2.png" alt="" className="vertical-2"></img>
          <img src="/vertical-2.png" alt="" className="vertical-3"></img>
          <img src="/vertical-1.png" alt="" className="vertical-4"></img>
        </div>

        <div className="connect-store-container">
          <img src="" className="background-image" alt="" />
          {/* Add other content for the ConnectStore component */}

          <div className="main-wrapper">
            <div className="content-wrapper">
              <div className="logo">
                <div class="logo">
                  <a href="javascript:void(0)">
                    <img src="/shopify.png" alt=""></img> </a>
                </div>
              </div>
              <div className="heading"><h2>Login to Existing <span className="turbo-boost-text">TurboBoost</span> Account</h2>
                <h4>Enter your Shopify domain</h4>
              </div>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="domain"
                  placeholder="your-store.myshopify.com"
                  value={domain} // Add the value attribute here
                  onChange={(e) => updateDomain(e.target.value)}
                ></input>
                <br />
                <button className="connect-button">Connect</button>
                <p>Don't have an account? <a className="link-signup" href="#">Sign up here</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopifyAuth;
