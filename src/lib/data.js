import mongoose from "mongoose";
import dbConnect from "./utils";
import { Post, User } from "./models";

export const getPosts = async () => {
    try {
        // console.log('called');
        dbConnect();
        const posts = await Post.find();
        console.log(posts.length);
        return posts;
    }
    catch (err) {
        console.error(err);
    }
}

export const getPost = async (slug) => {
    try {
        dbConnect();
        const post = await Post.findOne({ slug });
        return post;
    }
    catch (err) { console.error(err) }
}

export const getUsers = async () => {
    try {
        dbConnect();
        const users = await User.find();
        return users;

    } catch (err) { console.error(err) }
}
export const getUser = async (id) => {
    try {
        dbConnect();
        const user = await User.findById(id);

        return user;

    } catch (err) { console.error(err) }
}

