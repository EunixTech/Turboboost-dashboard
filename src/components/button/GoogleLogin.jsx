import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../slice/userLoginWithGoogleSlice';

export default function GoogleLoginButton() {
  const dispatch = useDispatch();

  const renderButton = ({ onClick }) => {
    return (
      <button style={{ display: 'none' }} onClick={onClick}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Your SVG icon code here */}
        </svg>
        Sign in with Google
      </button>
    );
  };

  const onSuccess = async (response) => {
    // Prepare the data to be sent to your API
    const data = {
      name: response.given_name,
      email_address: response.email,
      google_id: String(response.sub.toLowerCase()),
      google_token: response.access_token,
      device_token: 'token',
      device_type: 1,
    };

    // Dispatch the Redux action to make the API request
    dispatch(loginWithGoogle(data));
  };

  return (
    <>
      <GoogleLogin onSuccess={onSuccess} render={renderButton} onError={() => {}} />
    </>
  );
}
