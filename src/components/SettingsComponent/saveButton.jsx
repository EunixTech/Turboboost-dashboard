
import React from 'react';

const SaveButton = ({ btnText, onClick }) => {
  return (
    <button onClick={onClick} className="save-button bg-green-500 text-white py-2 px-4 rounded-md mt-4">
      {btnText}
    </button>
  );
};

export default SaveButton;
