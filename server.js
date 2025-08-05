const express = require('express')
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const handlerRoute = require('./router/youtube-router')

const app = express();
const port = process.env.PORT || 5000;

app.disable('x-powered-by')
app.use(cors());
app.use(express.json());

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', handlerRoute)


app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});