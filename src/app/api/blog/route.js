import { Post } from "@/lib/models";
import dbConnect from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await dbConnect();
        const posts = await Post.find();
        const response = NextResponse.json(posts);
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
    catch (err) {
        console.log("posts error");
    }
}
