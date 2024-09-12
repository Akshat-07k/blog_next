'use client';
import Image from "next/image"
import { useState, useEffect } from "react";
// const getDatayo = async (slug) => {
//     const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
//         headers: {
//             'Cache-Control': 'no-store',
//         },
//     });

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// };

// const getUser = async (id) => {
//     const res = await fetch(`http://localhost:3000/api/user/${id}`, {
//         headers: {
//             'Cache-Control': 'no-store',
//         },
//     });
//     if (!res.ok) throw new Error("Something went wrong in User Fetch");

//     return res.json();
// }

// const SinglePage = async ({ params }) => {

//     const { slug } = params;
//     const [post, setPost] = useState(null);
//     const [userName, setName] = useState("");
//     const [email, setEmail] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const post = await getDatayo(slug);
//                 post.userId = post.userId.replace(/ /g, '_');
//                 post.slug = post.slug.replace(/ /g, '_');
//                 setPost(post);

//                 const user = await getUser(post.userId);
//                 setName(user.username);
//                 setEmail(user.email);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchData();
//     }, [slug]);
const SinglePage = ({ params }) => {
    const temp = params.slug;
    const [post, setPost] = useState(null);
    const [user, setUser] = useState({});
    const slug = params.slug
    useEffect(() => {

        const fetchData = async () => {
            try {
                const postRes = await fetch(`http://localhost:3000/api/blog/${slug}?ts=${Date.now()}`, { cache: 'no-store' });
                if (!postRes.ok) throw new Error("Something went wrong");

                const post = await postRes.json();
                post.userId = post.userId.replace(/ /g, '_');
                post.slug = post.slug.replace(/ /g, '_');
                setPost(post);

                const userRes = await fetch(`http://localhost:3000/api/user/${post.userId}`, { cache: 'no-store' });
                if (!userRes.ok) throw new Error("Something went wrong in User Fetch");

                const temp = await userRes.json();
                setUser(temp.user[0])
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [slug]);

    return (
        <div className="flex flex-row justify-between h-">
            <div className="w-2/5 h-96 relative bg-skin-bgSoft overflow-hidden">
                <img src={post?.img} alt="IMG" className="w-full h-full absolute inset-0" />
            </div>


            <div className="w-1/2 p-10">
                <h1 className=" text-2xl font-semibold ">{post?.title}</h1>
                <br />
                <p className=" text-lg bg-skin-bgSoft p-2 rounded-md">{post?.desc}</p>
                <br />
                <p className="mt-6 font-bold text-xl text-skin-textSoft"> Author Info</p>
                <div className=" flex flex-row justify-around mt-6 w-[110%] items-center bg-skin-bgSoft p-2 rounded-lg">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <img src={user?.img} alt="img" />
                    </div>
                    <div className="">
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
