/**
 * Standard configuration object for Fetch API requests
 */
const fetchReqConfig = {
    method: `GET`,
    redirect: `follow`,
    credentials: `same-origin`,
    headers: {
        'Content-Type': 'application/json',
        'fetch-req': true,
        'Content-Security-Policy': 'upgrade-insecure-requests',
    }
};

export default () => {
    let token = null;

    if (typeof window !== `undefined`) {

        const token = localStorage.getItem(`authToken`);
        if (token) fetchReqConfig.headers.Authorization = `Bearer ${token}`;
    }

    return fetchReqConfig;
};
