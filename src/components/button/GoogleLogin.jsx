import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


export default function GoogleLoginButton() {

    const renderButton = ({ onClick }) => null;

    const loginWithGoogle = useGoogleLogin({

        onSuccess: async respose => {
            // try {
            //     axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            //         headers: {
            //             "Authorization": `Bearer ${respose.access_token}`
            //         }
            //     }).then(async (res) => {
            //         const datas = res?.data;
            //         console.log(datas)

            //         const userDataObj = {
            //             name: datas.given_name,
            //             email_address: datas.email,
            //             google_id: String(datas.sub.toLowerCase()),
            //             google_token: respose.access_token,
            //             device_token: "token",
            //             device_type: 1
            //         };

            //     // console.log(res.data)
            // } catch (err) {
            //     console.log(err)

            // }

        }
    });

  return (
    <>
      <button style={{ display: "none" }} onClick={loginWithGoogle}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1148_88683)">
            <path
              d="M24.2682 12.2765C24.2682 11.4608 24.2021 10.6406 24.061 9.83813H12.7422V14.4591H19.2239C18.955 15.9495 18.0907 17.2679 16.8252 18.1056V21.104H20.6922C22.963 19.014 24.2682 15.9274 24.2682 12.2765Z"
              fill="#4285F4"
            />
            <path
              d="M12.7391 24.0008C15.9756 24.0008 18.705 22.9382 20.6936 21.1039L16.8266 18.1055C15.7507 18.8375 14.3618 19.252 12.7435 19.252C9.61291 19.252 6.95849 17.1399 6.00607 14.3003H2.01562V17.3912C4.05274 21.4434 8.20192 24.0008 12.7391 24.0008Z"
              fill="#34A853"
            />
            <path
              d="M6.00473 14.3002C5.50206 12.8099 5.50206 11.196 6.00473 9.70569V6.61475H2.01869C0.316687 10.0055 0.316687 14.0004 2.01869 17.3912L6.00473 14.3002Z"
              fill="#FBBC04"
            />
            <path
              d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_1148_88683">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        Sign in with Google
      </button>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          var decoded = jwt_decode(credentialResponse.credential);
        }}
        render={renderButton}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
}
