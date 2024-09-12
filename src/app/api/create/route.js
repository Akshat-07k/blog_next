import { Post } from "@/lib/models";
import dbConnect from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const data = await req.json();
        console.log(data, 99);
        await dbConnect();
        const newPost = new Post(data);
        await newPost.save();
        return NextResponse.json({ success: true });
    }
    catch (err) { return NextResponse.json({ success: false, error: err.message }); }

}