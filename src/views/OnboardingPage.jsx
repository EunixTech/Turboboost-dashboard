import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios"; // Import axios

export default function OnboardingPage() {
  
  const { search } = useLocation(),
    query = new URLSearchParams(search),
    userToken = query.get('userToken');

  const fetchingUserDataByToken = async (values) => {
    try {
      // Make the API request using Axios for signing in
      const response = await axios.get(`http://localhost:8000/v1/user/redirect/login/${userToken}`);
      console.log("response",response.json())
   
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    fetchingUserDataByToken();
  }, []);

  return (
    <div>OnboardingPage</div>
  )
}
