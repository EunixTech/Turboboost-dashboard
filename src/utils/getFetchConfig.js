/**
 * Standard configuration object for Fetch API requests
 */
const fetchReqConfig = {
    method: `GET`,
    redirect: `follow`,
    credentials: "include",
    headers: {
        'Content-Type': 'application/json',
        'fetch-req': true,
    }
};

export default () => {
    return fetchReqConfig;
};
