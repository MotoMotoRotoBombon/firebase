import express from 'express';
import { getAllProjects, saveProject } from '../controllers/projectController.js';  
import authenticateToken from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/', authenticateToken, getAllProjects);
router.post('/', authenticateToken, saveProject);


export default router;  
