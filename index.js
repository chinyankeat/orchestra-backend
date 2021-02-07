const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const decodeIDToken = require('./authenticateToken');
const treesRouter = require ('./controllers/trees');
const app = express();

mongoose.connect(
    'mongodb+srv://chinyankeat:Sony12345@cluster0.smbls.mongodb.net/orchestra?retryWrites=true', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log('Connected to database');
     })
     .catch((err) => {
       console.log('Error connecting to DB', err.message);
     });
app.use(cors());
app.use(express.json());
app.use(decodeIDToken);

app.use('/api', treesRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});