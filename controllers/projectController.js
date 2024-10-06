import { collection, addDoc } from 'firebase/firestore';
import { db } from '../index.js';  
import * as projectModel from '../models/projectModel.js'; 

export async function getAllProjects(req, res) {
  const projects = projectModel.getAllProjects();
  if (projects.length > 0) {
    res.status(200).json(projects);
  } else {
    res.status(404).json({ code: 404, message: 'No se encontraron proyectos' });
  }
}
export async function createProject(req, res) {
  // Validaciones de estructura
  const newProject = projectModel.createProject(req.body);
  res.status(201).json(newProject);
}

export const saveProject = async (req, res) => {
  try {
    const projectData = req.body;  
    const docRef = await addDoc(collection(db, 'projects'), projectData);
    res.status(201).json({ message: 'Project added', id: docRef.id });
  } catch (e) {
    res.status(500).json({ message: 'Error adding project', error: e.message });
  }
};
