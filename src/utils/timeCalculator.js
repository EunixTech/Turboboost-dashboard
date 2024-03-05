function TimeDifferenceFromCurrent(dateString = "") {

    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - inputDate;
  
    // Convert milliseconds to minutes, hours, and days
    const minutesDiff = Math.abs(Math.floor(timeDifference / (1000 * 60)));
    const hoursDiff = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60)));
    const daysDiff = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
  
    if (minutesDiff < 60) {
      return `${minutesDiff} min${minutesDiff !== 1 ? 's' : ''} ago`;
    } else if (hoursDiff < 24) {
      return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
    } else {
      return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
    }
  }
  
  export default TimeDifferenceFromCurrent;