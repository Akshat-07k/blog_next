import PostCard from "@/component/postCard/postCard"
import Create_button from "./create_button";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' })
    const temp = res.json();
    // console.log(temp, 99);
    if (!res.ok)
        throw new Error(" Fetching data failed")

    return temp;
}

const page = async () => {
    const posts = await getData();
    return (
        <>
            <div className=" w-full flex flex-col items-center ">
                <Create_button />
            </div>
            <div className='text-skin-textSoft h-fit grid grid-cols-2 gap-x-28 pl-10 py-10'>
                {
                    posts.map((item, index) => {
                        return (
                            <PostCard key={index} props={item} />
                        )
                    })
                }

            </div>
        </>
    )
}

export default page
