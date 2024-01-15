const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");

const app = express();

const port = 3000;
app.use(express.json());
app.use(cors());

// Use userRoutes for '/users' endpoint
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});