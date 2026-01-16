const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// Custom Routes mapping
app.get('/tool1', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/tool2', (req, res) => {
    res.sendFile(path.join(__dirname, 'rtconverter.html'));
});

app.get('/tool3', (req, res) => {
    res.sendFile(path.join(__dirname, 'protonhash.html'));
});

// Fallback for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Routes available:`);
    console.log(`- http://localhost:${port}/ (Home)`);
    console.log(`- http://localhost:${port}/tool1 (Items Tool)`);
    console.log(`- http://localhost:${port}/tool2 (RT Converter)`);
    console.log(`- http://localhost:${port}/tool3 (Proton Hash)`);
});

// Export the app for Vercel serverless functions (if needed in advanced configs)
module.exports = app;
