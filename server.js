const express = require('express');
const connectDB = require('./config/db.js');

const app = express();
connectDB();
app.use(express.json({extended:false}));

app.use('/submit',require('./routes/invoiceSubmit'));
app.use('/fetchData',require('./routes/fetchData'));
app.use('/deleteEntry',require('./routes/deleteEntry'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server  is runnig on ${PORT}`));