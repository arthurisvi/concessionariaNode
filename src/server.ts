import express from 'express';
import { categoriesRoutes } from './routes/categories.routes'
import { CategoriesRepository } from './repositories/CategoriesRepository';

const app = express();

app.use (express.json())

app.use(categoriesRoutes)

app.listen(3000, ()=> console.log("Server rodando na porta 3000!"));