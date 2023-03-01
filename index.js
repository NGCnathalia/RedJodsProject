require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const todoRoutes = require("./src/routes/");
const PORT = process.env.PORT || 3000;

const {swaggerDoc :V1swaggerDoc}=require('./src/docs/swagger')

// app.get("/", (req, res)=> {
//     res.send("Hola jefecita")
// })

app.use(cors())
app.use(express.json())

V1swaggerDoc(app,PORT);
app.use("/Api/v1", todoRoutes );

dbConnect()

app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT);

})
