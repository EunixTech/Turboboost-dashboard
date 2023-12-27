import React, { useEffect } from 'react';

const BoardToken = 'a5a3b1a8-8ef0-6ff4-7809-5023877d58be';

const Feedback = () => {
  useEffect(() => {
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

    Canny('render', {
      boardToken: BoardToken,
      basePath: '/feedback', // See step 2
      ssoToken: null, // See step 3,
      theme: 'light', // options: light [default], dark, auto
    });
  }, []);

  return (
    <div data-canny />
  );
}

export default Feedback;