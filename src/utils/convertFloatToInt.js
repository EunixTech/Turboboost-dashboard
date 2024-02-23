function convertFloatToInt(number) {
    // Check if the number is a float
    if (Number.isInteger(number)) {
      return number; // If it's an integer, return it as is
    } else {
      // If it's a float, convert it to a string to check for zero after the decimal point
      const numberAsString = number.toString();
      const decimalIndex = numberAsString.indexOf('.');

      // If there's no decimal point, return the number as is
      if (decimalIndex === -1) {
        return number;
      } else {
        // If there's a decimal point, check if there's zero after it
        const decimalPart = numberAsString.substring(decimalIndex + 1);
        if (parseInt(decimalPart) === 0) {
          // If there's zero after the decimal point, convert it to an integer
          return parseInt(number);
        } else {
          // If there are non-zero digits after the decimal point, return the number as is
          return number;
        }
      }
    }
}

export default convertFloatToInt