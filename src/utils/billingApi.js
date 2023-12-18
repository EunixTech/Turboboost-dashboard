import axios from "axios";

export const billingApi=async(item,selected)=>{
    let planName = item?.name;

		let data = JSON.stringify({
			planType: selected == 0 ? "monthly" : "annually",
			planName: planName,
		});

		let authToken = localStorage.getItem('authToken');
		let config = {
			method: "post",
			url: "http://localhost:8000/v1/user/createSubscription",
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken}`,
			  },
			data: data,
		};
        return axios.request(config);
}