"use server"

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { FormState } from "../new/page";


export const submitPost = async (_currentState: FormState, formData: FormData) => {

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    try {
        await prisma.post.create({
            data: {
                title,
                content
            }
        })
    } catch {
        return { message: "送信失敗" }
    }

    redirect("/")
}
