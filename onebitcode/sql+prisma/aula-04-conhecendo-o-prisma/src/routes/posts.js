const { Router } = require("express");
const prisma = require("../database");

const router = Router()

router.get("/", async (req, res) => {
    const page = +req.query.page || 1
    const pageSize = +req.query.pageSyze || 10

    const skip = (page - 1) * pageSize
    const take = page

    const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
        take,
        skip
    })

    res.json(posts)
})

router.get("/search", async (req, res) => {
    const { title, authorId, published, startDate, endDate } = req.query
    const filter = {}

    if (title) {
        filter.title = {
            contains: title,
            mode: "insensitive"
        }
    }

    if (authorId) {
        filter.authorId = +authorId
    }

    if (published) {
        filter.published = published === true
    }

    if (startDate || endDate) {
        filter.createdAt = {}
        if (startDate) {
            filter.createdAt.gte = new Date(startDate)
        }
        if (endDate) {
            filter.createdAt.lte = new Date(endDate)
        }
    }

    console.log(`Filtros: ${filter}`)

    const posts = await prisma.post.findMany({
        where: filter
    })

    res.json(posts)
})

router.post("/", async (req, res) => {
    const newPost = await prisma.post.create({
        data: {
            title: req.body.title,
            slug: req.body.slug,
            content: req.body.content,
            published: req.body.published,
            authorId: req.body.authorId
        }
    })

    res.json(newPost)
})

router.get("/:id", async (req, res) => {
    const post = await prisma.post.findUnique({
        where: { id: +req.params.id },
        include: { author: true }
    })

    res.json(post)
})

router.put("/:id", async (req, res) => {
    const updatedPost = await prisma.post.update({
        data: req.body,
        where: { id: +req.params.id }
    })

    res.json(updatedPost)
})

router.delete("/:id", async (req, res) => {
    const deletedPost = await prisma.post.delete({
        where: { id: +req.params.id }
    })

    res.json({ deletedPost })
})

module.exports = router