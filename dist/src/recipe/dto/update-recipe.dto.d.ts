import { CreateRecipeDto } from './create-recipe.dto';
declare const UpdateRecipeDto_base: import("@nestjs/common").Type<Partial<CreateRecipeDto>>;
export declare class UpdateRecipeDto extends UpdateRecipeDto_base {
    title?: string;
    description?: string;
    ingredients?: string;
    instructions?: string;
}
export {};
