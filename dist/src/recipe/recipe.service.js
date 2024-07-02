"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RecipeService = class RecipeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRecipeDto) {
        const recipe = await this.prisma.recipe.create({
            data: createRecipeDto,
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`An error occured during the creation of ${createRecipeDto.title}`);
        }
        console.log(recipe);
        return recipe;
    }
    async findAll() {
        const recipes = this.prisma.recipe.findMany();
        if (!recipes) {
            throw new common_1.NotFoundException('No recipe have been found');
        }
        return recipes;
    }
    async findOne(id) {
        const recipe = await this.prisma.recipe.findUniqueOrThrow({
            where: { id }
        });
        return recipe;
    }
    async update(id, updateRecipeDto) {
        const recipe = await this.prisma.recipe.update({
            where: { id },
            data: updateRecipeDto
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with id ${id} does not exist.`);
        }
        return {
            statusCode: 200,
            message: `Recipe with id ${id} have been successfully updated.`
        };
    }
    async remove(id) {
        const recipe = await this.prisma.recipe.delete({
            where: { id }
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with id ${id} does not exist.`);
        }
        return {
            statusCode: 200,
            message: `Recipe with id ${id} have been successfully deleted.`
        };
    }
};
exports.RecipeService = RecipeService;
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecipeService);
//# sourceMappingURL=recipe.service.js.map