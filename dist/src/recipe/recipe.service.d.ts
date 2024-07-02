import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RecipeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    remove(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
}
