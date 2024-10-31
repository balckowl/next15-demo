import prisma from "@/lib/db";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function Page() {

    const submitPost = async (formData: FormData) => {
        "use server"

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        await prisma.post.create({
            data: {
                title,
                content
            }
        })
        
        // revalidateTag('my-data')
        redirect("/")
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form action={submitPost} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">新しい投稿を作成</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">タイトル</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="タイトルを入力"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="content" className="block text-gray-700 font-medium mb-2">コンテンツ</label>
                    <textarea
                        name="content"
                        id="content"
                        className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="内容を入力"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    送信
                </button>
            </form>
        </div>
    )
}
