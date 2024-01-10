import axios from "axios";
import appURLs from "../appURL";
export const billingApi=async(item,selected)=>{

	const  appURL = appURLs();
    let planName = item?.name;

	console.log("planName", planName)

		let data = JSON.stringify({
			planType: selected == 0 ? "monthly" : "annually",
			planName: planName,
		});

		let authToken = localStorage.getItem('authToken');
		let config = {
			redirect: `follow`,
			credentials: "same-origin",
			method: "post",
			url: `${appURL}/user/createSubscription`,
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken}`,
			  },
			data: data,
		};
        return axios.request(config);
}