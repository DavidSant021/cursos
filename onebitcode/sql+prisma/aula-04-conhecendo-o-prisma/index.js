const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: "David",
            email: "david@email.com",
            Posts: {
                create: [
                    {
                        title: "Post 1",
                        content: "consteudo do post 1",
                    },
                    {
                        title: "Post 2",
                        content: "consteudo do post 2",
                    }
                ]
            }
        }
    })

    const result = await prisma.user.findMany({
        include: { Posts: true }
    })

    console.log(result)
}

main()