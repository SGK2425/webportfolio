const express = require('express');
const cors = require('cors'); // Install: npm install cors
const app = express();
const port = 5000;

// VERY IMPORTANT: Enable CORS
app.use(cors()); // For all origins (less secure, but good for development)

// OR, for more secure CORS (only allow your React app's origin):
// app.use(cors({
//     origin: 'http://localhost:3000' // Replace with your React app's URL
// }));

app.use(express.json()); // To parse JSON request bodies

// ... your API routes (including /api/send-email)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
