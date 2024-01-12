/**
 * Standard configuration object for Fetch API requests
 */
const fetchReqConfig = {
    method: `GET`,
    redirect: `follow`,
    credentials: "same-origin",
    headers: {
        'Content-Type': 'application/json',
        'fetch-req': true,
    }
};

export default () => {
    return fetchReqConfig;
};
