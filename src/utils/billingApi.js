import axios from "axios";
import appURLs from "../appURL";

export const billingApi=async(item,selected)=>{

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
                },
                withCredentials: true,  // Set this to true to include credentials in the request
            }
        );
		return response;
      
}