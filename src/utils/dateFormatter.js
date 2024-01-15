
const dateFormatter = (dateString) => {
    const options = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
        year: 'numeric',
      };
    
      const dateObject = new Date(dateString);
    
      // Extracting the day suffix (e.g., "8th")
      const daySuffix = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).formatToParts(dateObject)
        .find(part => part.type === 'day').value;
    
      // Formatting the date and time separately
      const formattedDate = dateObject.toLocaleDateString('en-US', options).replace(/(\d+)(th|st|nd|rd)/, `$1${daySuffix}`);
      const formattedTime = dateObject.toLocaleTimeString('en-US', options);
    
      // Combining the formatted date and time
      return `${formattedDate} ${formattedTime}`;
};

export default dateFormatter

