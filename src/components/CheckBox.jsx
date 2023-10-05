import React from 'react';


const CheckBox = ({ change, check, setCheck }) => {
  return (
    <div
      className={`check-box ${check ? 'checked' : ''}`}
      onClick={() => {
        setCheck(!check);
        change();
      }}
    >
      {check && (
        <img
          alt=""
          src="/graphic/status/check.svg"
          className="check-icon"
        />
      )}
    </div>
  );
};

export default CheckBox;
