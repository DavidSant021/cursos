const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    await prisma.post.createMany({
        data: [
            {
                title: "Olá, mundo!",
                content: "Este é o meu primeiro post criado com o prisma ORM.",
                published: true
            },
            {
                title: "Post 2",
                content: null
            }
        ]
    })
}

main().then(async () => {
    const result = await prisma.post.findMany()
    console.table(result)
    await prisma.$disconnect()
})