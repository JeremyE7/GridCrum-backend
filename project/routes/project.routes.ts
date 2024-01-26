import { Router } from 'express'
import { ProjectController } from '../controllers/project_controller'

export const projectRouter = Router()

projectRouter.get('/', ProjectController.getAll)