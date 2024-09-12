import { Post } from "@/lib/models";
import dbConnect from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        dbConnect();
        const post = await Post.findOne({ slug })
        const response = NextResponse.json(post);
        response.headers.set('Cache-Control', 'no-store');

        return response;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
    // return NextResponse.json('ji')
};