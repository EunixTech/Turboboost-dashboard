import getFetchConfig from '../utils/getFetchConfig';
import standardFetchHandlers from '../utils/standardFetchHandlers';
import handleFetchErrors from '../utils/handleFetchErrors';
import appURLs from '../appURL';

const apiRequestHanlder = async (endPoint = "user/current-plan-detail") => {

    const fetchConfig = getFetchConfig(),
        appURL = appURLs();

    fetch(`${appURL}/${endPoint}`, fetchConfig)
        .then(handleFetchErrors)
        .then((res) => {
           
            if (Number(res?.status) === 200) {
              return res
            } else return null
            
        })
        .catch(standardFetchHandlers.error)
        .finally(() => {
            setTimeout(() => {
                // return toast.error("Something went wrong1");
            }, 1000);
        });
}

export default apiRequestHanlder