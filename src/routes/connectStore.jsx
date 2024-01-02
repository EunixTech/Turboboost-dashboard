import React from "react";

const ConnectStore = () => {
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
          <form action="#">
            <input
              type="text"
              name="domain"
              id="domain"
              placeholder="your-store.myshopify.com"
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

export default ConnectStore;
