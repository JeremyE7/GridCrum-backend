import express, { json } from 'express'
// import { corsMiddleware } from './middlewares/cors.js'
import { userRouter } from './routes/user.routes'
import dotenv from 'dotenv'
dotenv.config()
import flash from 'express-flash'
import session, { SessionOptions } from 'express-session'
import passport from 'passport'
import SQLite3Store from 'connect-sqlite3';

const sqliteDbPath = '../dev.db'

const SQLiteStore = SQLite3Store(session)

const app = express()
app.disable('x-powered-by') // Fix: Assign the value directly to the x-powered-by property
app.use(flash())
app.use(
    session({
        store: new (SQLiteStore as any)({ db: sqliteDbPath }),
        secret: process.env.SESSION_SECRET ?? 'default-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // Ajusta según tus necesidades de seguridad
            maxAge: 30 * 1000, // 1 hora en milisegundos
          }, // Ajusta esto según tus necesidades de seguridad
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(json())

app.use('/api', userRouter)

const PORT = process.env.PORT_USER ?? 3001

app.listen(PORT, () => {
    console.log('Server Users on port http://localhost:' + PORT)
})