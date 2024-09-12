
import { getPost } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
const getPhoto = async (id) => {
  // const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)

  // if (!photo.ok) throw new Error("Couldn't fetch");
  // return photo.json();
}
const PostCard = async ({ props }) => {
  const createdAt = new Date(props.createdAt);
  const formattedDate = createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(props.userId, props.slug)
  return (

    <div className=" flex flex-col">
      <div className=" flex flex-row justify-between">
        {/* <div className="w-3/4 h-full bg-skin-bgSoft"> */}
        <img src={props.img} alt="IMG" className="w-3/4 h-full bg-skin-bgSoft" />
        {/* </div> */}
        <div className="w-1/6 flex items-center justify-center">
          <p className="transform rotate-90">{formattedDate}</p>
        </div>
      </div>
      <div className=" mb-10" >
        <h1 className=" text-2xl font-semibold ">{props.title}</h1><br />
        <p>{props.desc}</p>
        <br />
        <Link href={`/blog/${props.slug}`}>Read More....</Link>

      </div>
    </div>
  )
}

export default PostCard
