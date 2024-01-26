import { Request, Response } from "express";
import { GatewayProjects } from "../models/gateway-project";
import dotenv from 'dotenv'
dotenv.config()

export class GatewayProjectsController {
    static async getAll(req: Request, res: Response) {
        const projects = await GatewayProjects.getProjects();
        if('error' in projects){
            res.status(500).send(projects);
        }
        res.send(projects);
    }
}