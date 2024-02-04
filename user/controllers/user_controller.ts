import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/user";
import passport from 'passport';

import initializePassport from '../passport';
import { User } from "../../types";
initializePassport(passport)


export class UserController{
    static async getAll(req: Request , res: Response){
        const projects = await UserModel.getAll();
        if("error" in projects){
            return res.status(500).json(projects);
        }
        return res.status(200).json(projects);
    }

    static async registerUser(req: Request, res: Response){
        const user = await UserModel.registerUser({body: req.body});
        if("error" in user){
            return res.status(500).json(user);
        }
        return res.status(200).json(user);
    }

    static async loginLocal(req: Request, res: Response, next: NextFunction) {
        passport.authenticate('local', (user: User, err: string, ) => {
            if (err) {                
                return res.status(500).json({ message: 'Error during authentication' })
            }
            if (!user) {
                return res.status(401).json({ message: 'User or password incorrect' })
            }


            req.login(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({ message: 'Logged in', user });
            })
        })(req, res, next)
    }

    static async logout(req: Request, res: Response) {
        req.logout((err: any) => {
            if (err) {
                return res.status(500).json({ message: 'Error during logout' })
            }
        })
        return res.status(200).json({ message: 'Logged out' })
    }
}