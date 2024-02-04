import { Router } from 'express'
import { UserController } from '../controllers/user_controller'
import { validateSession } from '../middleware/isUserAuthenticated'

export const userRouter = Router()

userRouter.get('/', validateSession, UserController.getAll)
userRouter.post('/', UserController.registerUser)
userRouter.post('/login', UserController.loginLocal)
userRouter.post('/logout', UserController.logout)