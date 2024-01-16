import axios from "axios";
import appURLs from "../appURL";

export const billingApi=async(item,selected)=>{
    let token = null;

    if (typeof window !== `undefined`) {
         token = localStorage.getItem(`authToken`);
    }

	const  appURL = appURLs();
    let planName = item?.name;

		let data = JSON.stringify({
			planType: selected == 0 ? "monthly" : "annually",
			planName: planName,
		});

		const response = await axios.post(
            `${appURL}/user/createSubscription`,
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