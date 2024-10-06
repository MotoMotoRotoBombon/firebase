import express from 'express';
import { getAllProjects, createProject } from '../controllers/projectController.js';  
import authenticateToken from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/', authenticateToken, getAllProjects);
router.post('/', authenticateToken, createProject);

export default router;  
