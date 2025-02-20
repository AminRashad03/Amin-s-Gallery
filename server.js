const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configure storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep original filename
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(__dirname));

// Handle file upload
app.post('/upload', upload.single('project-file'), (req, res) => {
    res.send('File uploaded successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
