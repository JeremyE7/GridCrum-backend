import { Project, ProjectItem } from '../../types';
import { prisma } from "../db";

export class ProjectModel {
    static async getAll(): Promise<ProjectItem[] | { error: string, msg: string }> {
        try {

            const projects = await prisma.item.findMany({
                where: {
                    type: {
                        name: 'project'
                    }
                },
                include: {
                    type: true,
                    project: {
                        include: {
                            tags: true,
                            springs: true
                        }
                    }
                }
            })

            const projectItems = projects.map(project => {
                if (project.project === null) return

                const Project: Project = project.project

                return {
                    id: project.i,
                    x: project.x,
                    y: project.y,
                    w: project.w,
                    h: project.h,
                    type: project.type.name,
                    data: Project
                }
            }) as unknown as ProjectItem[];

            return projectItems
            
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