import { Post } from "@prisma/client";

type Props = { 
    posts: Post[] 
    rendering: "static" | "dynamic"
}

export default function Section({ posts, rendering }: Props) {
    return (
        <div className="h-[50vh] border-b relative pt-8">
            <div className="grid grid-cols-5 gap-3">
                {posts.map((post) => (
                    <div key={post.id} className="border rounded-md">
                        <h2 key={post.id} className="font-bold text-2xl border-b p-2">{post.title}</h2>
                        <p className="p-2">{post.content}</p>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 right-0 font-bold text-[30px] pb-5">{rendering}</div>
        </div>
    )
}
