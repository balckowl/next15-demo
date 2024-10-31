import prisma from "@/lib/db"
import Section from "./section"

const getAllPosts = async () => {
    "use cache"
    const posts = await prisma.post.findMany()
    return posts
}

export default async function StaticComponents() {

    const posts = await getAllPosts()

    return (
        <Section posts={posts} rendering="static"/>
    )
}
