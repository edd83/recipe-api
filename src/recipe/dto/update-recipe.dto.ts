import { PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    ingredients?: string;

    @IsOptional()
    @IsString()
    instructions?: string;
}
