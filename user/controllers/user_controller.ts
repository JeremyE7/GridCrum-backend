import { Request, Response } from "express";
import { UserModel } from "../models/user";


export class UserController{
    static async getAll(req: Request , res: Response){
        const projects = await UserModel.getAll();
        if("error" in projects){
            return res.status(500).json(projects);
        }
        return res.status(200).json(projects);
    }
}