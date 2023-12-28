/**
 * @function
 * @description General-use Fetch API response parser
 * @param {Promise} response Promise containing the response
 * @returns {*} Extracted JSON body content of the response
 */
module.exports = (response) => {
    if (!response.ok) throw Error(response.statusText);
     return response.json();
};
