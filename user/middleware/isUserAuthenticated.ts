import { Request, Response, NextFunction } from 'express';

export const validateSession = (req: Request, res: Response, next: NextFunction) => {
  
  if (req.isAuthenticated()){
    // Si hay una sesión y un usuario en la sesión, el usuario está autenticado
    next()
  } else {
    // Si no hay sesión o el usuario no está en la sesión, retornar un error
    res.status(401).json({message: "You are not authorized"})
  }
};
