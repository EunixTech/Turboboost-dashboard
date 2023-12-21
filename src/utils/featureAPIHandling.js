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
        .then((res) => {
            if (Number(res?.status) === 200) return toast.success(res.message);
            else return toast.error(res?.message)
        })
        .catch(standardFetchHandlers.error)
        .finally(() => {
            setTimeout(() => {
                return toast.error("Something went wrong");
            }, 1000);
        });
}
