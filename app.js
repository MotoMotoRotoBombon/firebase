import express from 'express';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes.js';
import authRoutes from './routes/authRoutes.js';  

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use('/projects', projectRoutes);
app.use('/auth', authRoutes);

app.use((req, res, next) => {
    res.status(404).json({ code: 404, message: 'Ruta no encontrada' });
});

export default app;  
