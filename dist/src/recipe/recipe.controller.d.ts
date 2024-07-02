import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(createRecipeDto: CreateRecipeDto): Promise<{
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    remove(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
}
