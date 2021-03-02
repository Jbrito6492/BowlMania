const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public', 'dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});