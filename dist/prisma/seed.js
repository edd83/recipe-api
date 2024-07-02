"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const recipe1 = await prisma.recipe.upsert({
        where: { title: 'Spaghetti Bolognese' },
        update: {},
        create: {
            title: 'Spaghetti Bolognese',
            description: 'A classic Italian dish',
            ingredients: 'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
            instructions: '1. Cook the spaghetti. 2. Fry the minced beef. 3. Add the tomato sauce to the beef. 4. Serve the spaghetti with the sauce.'
        }
    });
    const recipe2 = await prisma.recipe.upsert({
        where: { title: 'Chicken Curry' },
        update: {},
        create: {
            title: 'Chicken Curry',
            description: 'A spicy Indian dish',
            ingredients: 'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
            instructions: '1. Fry the chicken. 2. Add the curry powder to the chicken. 3. Add the coconut milk. 4. Serve the curry with rice.'
        }
    });
    console.log({ recipe1, recipe2 });
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map