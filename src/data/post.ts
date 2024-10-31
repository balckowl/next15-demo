import prisma from "@/lib/db"

export const getAllPosts = async() => {
    const posts = await prisma.post.findMany()
    return posts
}
