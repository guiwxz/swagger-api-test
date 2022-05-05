import { Router } from "express";

import { v4 as uuid } from "uuid";
import { authenticated } from "./authenticated";

const router = Router();

interface CoolTeacher {
  id: string;
  name: string;
  description: string;
}

const teachers: CoolTeacher[] = [];

router.get("/teachers/:id", (req, res) => {
  const { id } = req.params;

  const teacher = teachers.find((t) => t.id == id);

  if (!teacher) {
    return res.status(400).json({ message: "Não encontrado" });
  }

  return res.json(teacher);
});

router.get("/teachers", (req, res) => {
  return res.json(teachers);
});

router.post("/teachers", authenticated, (req, res) => {
  const { name, description } = req.body;

  const teacher: CoolTeacher = {
    id: uuid(),
    name,
    description,
  };

  teachers.push(teacher);
  return res.json(teacher);
});

export default router;
