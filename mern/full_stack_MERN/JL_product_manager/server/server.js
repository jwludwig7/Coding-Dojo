const express = require('express');
const cors = require('cors');
const {productRouter} = require('./routes/product.routes')

const port = 8000;


// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require('./config/mongoose.config');


const app = express();

app.get('/', (req,res) => {
    return res.json({hell: "world"})
});

app.use(cors());

app.use(express.json());

app.use('/api/products', productRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to`)
});