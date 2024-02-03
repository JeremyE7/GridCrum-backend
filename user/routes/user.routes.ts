import { Router } from 'express'
import { UserController } from '../controllers/user_controller'

export const projectRouter = Router()

projectRouter.get('/', UserController.getAll)