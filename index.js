//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint category
const category = require('./routes/category');
app.use("/category", category)

//endpoint tutorial
const tutorial = require('./routes/tutorial');
app.use("/tutorial", tutorial)

//endpoint detail
const detail = require('./routes/detail');
app.use("/detail", detail)

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})

