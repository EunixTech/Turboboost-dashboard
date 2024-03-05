import React, { useState } from 'react';

const Otpverification = () => {
  const [code, setCode] = useState(''); // Initialize state for your input field

  const handleInputChange = (e) => {
    setCode(e.target.value); // Update the state when the input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted code:', code);
  };



  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      {/* ... Other parts of your code */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <div className="w-16 h-16">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name="code"
                id="code"
                value={code} // Use the state value
                onChange={handleInputChange} // Handle input changes
              />
            </div>
            {/* ... Repeat this input block for other input fields */}
          </div>
          {/* ... Other parts of your form */}
        </div>
      </form>
    </div>
  );
}

export default Otpverification;
