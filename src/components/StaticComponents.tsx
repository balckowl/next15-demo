import prisma from "@/lib/db"
import Section from "./section"
import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from 'next/cache'

const getAllPosts = async () => {
    "use cache"
    // cacheTag('my-data')
    const posts = await prisma.post.findMany()
    return posts
}

export default async function StaticComponents() {

    const posts = await getAllPosts()

    return (
        <Section posts={posts} rendering="static"/>
    )
}
