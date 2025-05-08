/**
 * @function
 * @description Returns 3 variables (isSuccess, isFailure, isError) to help evaluate status of a JSON response that's compliant with JSend's formatting
 * @param {Object} response JSend compatible response payload
 * @returns {Object} Object with 3 populated boolean properties - isSuccess, isFailure, isError
 */
module.exports = (response = null) => {
    if (!(response && typeof response === `object` && !Array.isArray(response) && response.status)) {
        throw new TypeError(`Response object is missing/invalid or doesn't match the JSend specification`);
    }

    const lowerCasedStatusText = response.status.trim().toLowerCase();

    const isSuccess = Boolean(lowerCasedStatusText === `success`),
        isFailure = Boolean(lowerCasedStatusText === `fail`),
        isError = Boolean(lowerCasedStatusText === `error`);

    return { isSuccess, isFailure, isError };
};
