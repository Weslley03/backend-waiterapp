import express from "express";
import conectDatabase from './src/database/db.js'
import userRoute from './src/routes/user.route.js'
import authRoute from './src/routes/auth.route.js'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

conectDatabase();

app.use('/entrar', userRoute)
app.use('/auth', authRoute)

app.listen(3000, () => {
    console.log('runing...')
})
