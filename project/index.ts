import express, { json } from 'express'
// import { corsMiddleware } from './middlewares/cors.js'
import { projectRouter } from './routes/project.routes.js'

const app = express()
app.disable('x-powered-by') // Fix: Assign the value directly to the x-powered-by property

app.use(json())
// app.use(corsMiddleware)

app.use('/api', projectRouter)
const PORT = process.env.PORT_PROJECTS ?? 3000

app.listen(PORT, () => {
    console.log('Server listen on port http://localhost:' + PORT)
})