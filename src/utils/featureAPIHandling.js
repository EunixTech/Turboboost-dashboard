import getFetchConfig from '../utils/getFetchConfig';
import standardFetchHandlers from '../utils/standardFetchHandlers';
import handleFetchErrors from '../utils/handleFetchErrors';
import appURLs from '../appURL';
import toast from 'react-hot-toast';

export const featureAPIHandling = async (endPoint = " ") => {

    const fetchConfig = getFetchConfig(),
        appURL = appURLs();

    fetch(`${appURL}${endPoint}`, fetchConfig)
        .then(handleFetchErrors)
        .then((resJSON) => {
            console.log(resJSON)
            if (resJSON?.status === 200) return toast.success(resJSON.message);
            else return toast.error(resJSON?.message)
        })
        .catch(standardFetchHandlers.error)
}
