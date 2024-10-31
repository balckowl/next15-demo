import prisma from "@/lib/db"
import Section from "./section"

export const getAllPosts = async() => {
    const posts = await prisma.post.findMany()
    return posts
}

export default async function DynamicComponent() {

    const posts = await getAllPosts()

    return (
        <Section posts={posts} rendering="dynamic"/>
    )
}
