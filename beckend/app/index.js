
// Import ROUTER
const routeSd = require('./router/routeSd.js')
const routeSmp = require('./router/routeSmp.js')
const routeSma = require('./router/routeSma.js')

// Import Libary
const express = require('express');
const cors = require('cors')


// Create Variable
const app = express();
const port = 8080;
app.use(express.json());
app.use(cors())

app.use(routeSd)
app.use(routeSmp)
app.use(routeSma)



app.listen(port, () => {
  console.log(`SERVER SEDANG BERJALAN PADA PORT ${port}`);
});
