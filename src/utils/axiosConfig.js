import axios from "axios";
import appURLs from "../appURL";

export const PostAxiosConfig = async (URL="", data) => {
    let token = null;
	const  appURL = appURLs();
    
    if (typeof window !== `undefined`) {
        token = localStorage.getItem(`authToken`);
    }

    const response = await axios.post(
        `${appURL}/${URL}`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true,  // Set this to true to include credentials in the request
        }
    );
    return response;

}

export const GetAxiosConfig = async (URL="") => {
    let token = null;
	const  appURL = appURLs();
    
    if (typeof window !== `undefined`) {
        token = localStorage.getItem(`authToken`);
    }

    const response = await axios.get(
        `${appURL}/${URL}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true,  // Set this to true to include credentials in the request
        }
    );

        return response;
 
}

export const PatchAxiosConfig = async (URL="", data) => {
    let token = null;
	const  appURL = appURLs();
    
    if (typeof window !== `undefined`) {
        token = localStorage.getItem(`authToken`);
    }

    const response = await axios.patch(
        `${appURL}/${URL}`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            withCredentials: true,  // Set this to true to include credentials in the request
        }
    );
    console.log("response.status response.status ",response.status )
    return response;

}