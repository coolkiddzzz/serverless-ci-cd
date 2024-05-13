// module.exports.firsthandler = async (event) => {
//     console.log('Start')
//     console.log(event)
//     console.log('End')
//     return {
//       statusCode: 200,
//       body: JSON.stringify(
//         {
//           message: "This is get function!",
//         },null,2),
//     };
//   };
  
  
//   module.exports.handler_hello = async (event) => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify(
//         {
//           message: "Hello there!",
//           input: event,
//         },
//         null,
//         2
//       ),
//     };
//   };

const express = require('express');

const app = express();
const PORT = 3000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server; // Export the server instance