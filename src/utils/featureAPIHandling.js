import getFetchConfig from '../utils/getFetchConfig';
import standardFetchHandlers from '../utils/standardFetchHandlers';
import handleFetchErrors from '../utils/handleFetchErrors';
import appURLs from '../appURL';
import toast from 'react-hot-toast';
import { GetAxiosConfig, PostAxiosConfig } from "../utils/axiosConfig.js";

export const featureAPIHandling = async (endPoint = " ") => {

   try {
    const res = await GetAxiosConfig(endPoint)
    const resJSON = res?.data;

    if (resJSON?.status === 200) return toast.success(resJSON.message);
    else return toast.error(resJSON?.message)

   } catch (error) {
    return toast.error("Please try again")
   }
}
