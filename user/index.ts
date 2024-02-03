import express, { json } from 'express'
// import { corsMiddleware } from './middlewares/cors.js'
import { projectRouter } from './routes/user.routes'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.disable('x-powered-by') // Fix: Assign the value directly to the x-powered-by property

app.use(json())
// app.use(corsMiddleware)

app.use('/api', projectRouter)

const PORT = process.env.PORT_USER ?? 3001

app.listen(PORT, () => {
    console.log('Server Proyects on port http://localhost:' + PORT)
})