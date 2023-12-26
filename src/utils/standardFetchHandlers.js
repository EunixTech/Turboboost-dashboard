import { toast } from 'react-toastify';

import evaluateJSONResponse from './evaluateJSONResponseStatus';

const standardFetchSuccessHandler = (res, showMessageRcvdFromServer = true) => {
    if (!evaluateJSONResponse(res).isSuccess) throw new Error(res.data.message);
    else if (showMessageRcvdFromServer) return toast.success(res.data.message);
};

const standardFetchErrorHandler = (err) => {
    console.log(err)
    return toast.error(err.message || `Internal Server Error`);
};

export default {
    success: standardFetchSuccessHandler,
    error: standardFetchErrorHandler
};
