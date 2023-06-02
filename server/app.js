import express from 'express'
import cors from 'cors'
import morgan from "morgan"
import connectDb from './DataBase/connection.js';
import router from './Router/Route.js';



const app=express()
const port = 8000

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable("x-powered-by")



app.use('/api', router);


connectDb().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`sever conected on http://localhost:${port}`);
            
        })
    } catch (error) {
        console.log(`cannot connect to the  http://localhost:${port}`);
        
    }
}).catch((error)=>{
    console.log("Invalid database connection");
    
})

