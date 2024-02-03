import { Project, ProjectItem, User } from '../../types';
import { prisma } from "../db";

export class UserModel {
    static async getAll(): Promise<User[] | { error: string, msg: string }> {
        try {

            const users = await prisma.user.findMany({include: {items: true}})

            return users
            
        } catch (err: any) {
            return { error: "Error al obtener los proyectos", msg: err }
        }

    }

    static async getById({ id }: { id: Number }) {

    }

    static async create({ body }: { body: ProjectItem }) {

    }

    static async update({ id, body }: { id: Number, body: ProjectItem }) {

    }
}