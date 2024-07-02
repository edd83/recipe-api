import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor (private readonly prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const recipe = await this.prisma.recipe.create({
      data: createRecipeDto,
    });
    if (!recipe) {
      throw new NotFoundException(`An error occured during the creation of ${createRecipeDto.title}`);
    }
    console.log(recipe);
    return recipe;
  }

  async findAll() {
    const recipes = this.prisma.recipe.findMany();
    if (!recipes) {
      throw new NotFoundException('No recipe have been found');
    }
    return recipes;
  }

  async findOne(id: number) {
    const recipe = await this.prisma.recipe.findUniqueOrThrow({
      where: { id }
    });
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} does not exist.`);
    }
    return {
      statusCode: 200,
      message: `Recipe with id ${id} have been successfully updated.`
    };
  }

  async remove(id: number) {
    const recipe = await this.prisma.recipe.delete({
      where: { id }
    });
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} does not exist.`);
    }
    return {
      statusCode: 200,
      message: `Recipe with id ${id} have been successfully deleted.`
    };
  }
}
