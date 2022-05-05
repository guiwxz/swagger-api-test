import { NextFunction, Request, Response } from "express";

export const authenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).send(); // response c status de nao autorizado
  }

  const [_, passedToken] = token.split(" ");

  if (passedToken === "admin") {
    return next();
  }

  return response.status(401).send();
};
