import { Project, ProjectItem, User } from '../../types';
import { prisma } from "../db";
import bcrypt from 'bcrypt';



export class UserModel {

    /**
     * Metodo para registrar un usuario
     * @param body Contiene los datos del usuario a registrar
     * @returns Retorna el usuario registrado o un objeto con error y mensaje
     */
    static async registerUser({ body }: { body: User }): Promise<{user: User, msg: string} | { error: string, msg: string }> {
        try {
            // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(body.password, 10);

            // Crear el usuario en la base de datos
            const user = await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    password: hashedPassword,
                },
            });

            return {user: user as User, msg: "Usuario registrado correctamente"};
        } catch (err: any) {
            // Si hay un error, retornar un objeto con error y mensaje
            return { error: "Error al registrar el usuario", msg: err };
        }
    }

    static async getAll(): Promise<User[] | { error: string, msg: string }> {
        try {

            const users = await prisma.user.findMany({ include: { items: true } })

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