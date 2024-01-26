import express, { json } from 'express'
// import { corsMiddleware } from './middlewares/cors.js'
import { projectRouter } from './routes/gateway.project.routes'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.disable('x-powered-by') // Fix: Assign the value directly to the x-powered-by property

app.use(json())
// app.use(corsMiddleware)

app.use('/api/projects', projectRouter)

const PORT = process.env.PORT_GATEWAY ?? 3000

app.listen(PORT, () => {
    console.log('Server Gateway on port http://localhost:' + PORT)
})