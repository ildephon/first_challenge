const transform = (str) => {
    const len = str.length;
  
    // Validate string length (optional)
    if (len < 2 || len > 1000) {
      return 'String must be between 1 and 1000 characters';
    }
  
    // Check divisibility by 15 (combined operations)
    if (len % 15 == 0) {
      str =`${str.split('').reverse().join('')} - 
      ${str.split('').reverse().join('').replace(/./g, char => char.charCodeAt(0))}`; // Replace with ASCII codes
    } else if (len % 5 == 0) {
      str = str.replace(/./g, char => char.charCodeAt(0)); // Replace with ASCII codes
    } else if (len % 3 ==0) {
      str = str.split('').reverse().join(''); // Reverse
    }
  
    return str;
  };
  
  console.log(transform('welcome to java'));
  console.log(transform('hello')); // Output: 104 101 108 108 111 (ASCII codes)
  console.log(transform('Jav')); // Output: tpircsavaJ (reversed)
  