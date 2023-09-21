const commonRegex = require(`./commonRegex`);

exports.isValidIndianMobileNumber = (mobileNumber = null) => {
    return mobileNumber && String(mobileNumber) && String(mobileNumber).match(commonRegex.indianMobileNumberRegex);
};

// /**
//  * @function
//  * @description Validates whether provided value is a String and is truthy
//  * @param {string} str Value to validate as a truthy String
//  * @returns {boolean}
//  */
exports.isTruthyString = (str = ``) => {
    return Boolean(str && typeof str === `string` && str.trim());
};

exports.isValidEmailAddress = (emailAddress = null) => {
    return emailAddress && String(emailAddress) && String(emailAddress).match(commonRegex.emailAddressRegex);
};

exports.isValidPassword = (password = null) => {
    return (password
        && String(password)
        && String(password).match(commonRegex.passwordRegex));
}

exports.isValidBoolean = (str = ``) => {
    return Boolean(str && (typeof str === `boolean`));
}
