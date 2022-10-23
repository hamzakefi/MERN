const express=require("express")


//2 create instance
const app=express()


//4 require env and config
require("dotenv").config();

 // middleware bodyparser
app.use(express.json())
// connnect our DB
const connectDb = require("./config/connectDb")
connectDb();
app.use('/api/contact' , require('./Routes/contact') )

app.use('/api/user' , require('./Routes/contact') )



//3 create port
const PORT = process.env.PORT
//5 create server
app.listen(PORT , error => {
    error ? console.error(` Fail to connect ,${error}` ) :
    console.log(`server is running on port ${PORT}`)
})