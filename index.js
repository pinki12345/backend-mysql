const express = require('express');
const app = express();
const PORT = 3000
const router = require('./routes/user');
const category = require('./routes/category');
const service = require('./routes/service');
const price = require('./routes/price')

app.use(express.json());




app.use("/api/v1",router)
app.use("/api/v1",category)
app.use("/api/v1",service)
app.use("/api/v1",price)




app.listen(PORT, function () {
    console.log(' app listening on port 3000!');
});