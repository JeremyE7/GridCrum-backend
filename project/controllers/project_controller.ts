import { Request, Response } from "express";
import { ProjectModel } from "../models/project";
import { ProjectItem } from "../../types";

export class ProjectController{
    static async getAll(req: Request , res: Response){
        const projects = await ProjectModel.getAll();
        if("error" in projects){
            return res.status(500).json(projects);
        }
        return res.status(200).json(projects);
    }
}