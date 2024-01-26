import { Router } from 'express'
import { GatewayProjectsController } from '../controllers/gateway-projects-controller'

export const projectRouter = Router()

projectRouter.get('/', GatewayProjectsController.getAll)