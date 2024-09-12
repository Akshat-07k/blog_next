import { Post, User } from "@/lib/models";
import dbConnect from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        dbConnect();
        const posts = await Post.find();
        return NextResponse.json(posts.length);
    }
    catch (err) {
        console.log(err);
    }
}