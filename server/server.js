import  express  from "express";
import dotenv from 'dotenv'
import userRouter  from './routes/useRouter.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import dbConnect from "./config/db.js";
import cookieParser from "cookie-parser";




dotenv.config();
const port =process.env.PORT || 5000 
dbConnect()
const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/user',userRouter)


//error handler
app.use(notFound);
app.use(errorHandler)





app.listen(port,()=>console.log(`server is ruunig at port ${port}`))