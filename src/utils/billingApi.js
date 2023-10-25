import axios from "axios";

export const billingApi=async(item,selected)=>{
    let planName = item?.name;

		let data = JSON.stringify({
			planType: selected == 0 ? "monthly" : "annually",
			planName: planName,
		});

		let config = {
			method: "post",
			url: "http://localhost:8000/v1/user/createSubscription",
			headers: { 
				'Content-Type': 'application/json', 
			  },
			data: data,
		};
        return axios.request(config);
}