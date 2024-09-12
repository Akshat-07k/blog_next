import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/3 py-10">
        <h1 className=" text-9xl font-bold text-skin-textSoft">Thot Thoughts</h1>
        <br />
        <p className="text-skin-textSoft">welcome everyone, feel free to share your Thoughts and no need to judge anyone. Enjoy 😊</p>
        <a href="/about">
          <button className=" w-2/5 p-3 bg-blue-400 text-white rounded-lg m-2">Learn More</button>
        </a>
        <a href="/contact">
          <button className="w-2/5 p-3 bg-slate-300 text-blue-950 rounded-lg m-2">Contact</button>
        </a>
      </div>
      <div className="w-2/5 relative">
        <Image src='/home.png' fill />
      </div>
    </div>
  )
};

export default Home;