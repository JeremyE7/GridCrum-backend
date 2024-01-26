import 'dotenv/config' 
import { ProjectItem } from '../../types';


export class GatewayProjects{
    static async getProjects(): Promise<ProjectItem[] | {error: string, msg: string}>{
        try {
            const projects = await fetch(`${process.env.DEV_SERVICE_URL}:${process.env.PORT_PROJECTS}/api`)	;
            return projects.json();
        } catch (error: any) {            
            console.log(`${process.env.DEV_SERVICE_URL}:${process.env.PORT_PROJECTS}/api`);
            
            return {error: 'Error al obtener los proyectos', msg: "El servicio no se encuentra disponible"}
        }
    }
}