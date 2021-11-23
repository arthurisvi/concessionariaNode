import { Category } from '../model/Category'

interface ICreateCategoryDTO{
    name: string,
    description:string
}

//DTO -> Data transfer object - criar um objeto que vai ser responsavel por receber os dados da rota
class CategoriesRepository{

    private categories: Category[] = []

    constructor(){
        this.categories = []
    }

    create ({name, description}: ICreateCategoryDTO): Category{

        const category = new Category ()
    
        //passa um objeto e os atributos que quer passar para esse category
        Object.assign(category, { 
            name, 
            description,
            created_at: new Date()
        })
      
        this.categories.push(category);
        return category;
    }

    list (): Category[] {
        return this.categories
    }

    findByName(name: string): Category {
        const category = this.categories.find(c => c.name === name)
        
        return category
    }
}

export { CategoriesRepository }