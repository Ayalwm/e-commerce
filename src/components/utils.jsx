
export const generateDeliveryCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit delivery code
  };
  
  export const generateTransactionId = () => {
    const timestamp = Date.now().toString(); // Use timestamp for uniqueness
    return `TX${timestamp.slice(-6)}${Math.floor(Math.random() * 90 + 10)}`; // TX + last 6 digits of timestamp + 2 random digits
  };
  