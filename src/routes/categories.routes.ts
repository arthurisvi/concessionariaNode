import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categories = [];

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/categories", (req, res) => {
    const { name, description } = req.body;

    const categoriesAlreadyExists = categoriesRepository.findByName(name)

    if (categoriesAlreadyExists){
        return res.status(400).json({error: "Categories already exists!"})
    }
    
      return res.status(201).json(categoriesRepository.create({name, description}));
  })

 categoriesRoutes.get("/categories", (req, res) =>{

    const all = categoriesRepository.list();

    return res.json(all);
  })

export { categoriesRoutes }