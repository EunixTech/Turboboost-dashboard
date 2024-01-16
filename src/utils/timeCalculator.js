function timeDifferenceFromCurrent(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - inputDate;
  
    // Convert milliseconds to minutes, hours, and days
    const minutesDiff = Math.floor(timeDifference / (1000 * 60));
    const hoursDiff = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    if (minutesDiff < 60) {
      return `${minutesDiff} minute${minutesDiff !== 1 ? 's' : ''} ago`;
    } else if (hoursDiff < 24) {
      return `${hoursDiff} hour${hoursDiff !== 1 ? 's' : ''} ago`;
    } else {
      return `${daysDiff} day${daysDiff !== 1 ? 's' : ''} ago`;
    }
  }
  
  // Example usage:
  const inputDateString = "2024-01-14T14:33:15.229+00:00"; // Use the appropriate date string format
  const result = timeDifferenceFromCurrent(inputDateString);
  
  console.log(`Time difference from ${inputDateString} to current date: ${result}`);
  