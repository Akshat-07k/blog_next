"use client"
import { useSessionData } from '@/custom';
import { auth } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const Create_button = () => {
    const router = useRouter();

    useSessionData();
    const handleClick = async () => {
        router.push('/blog/create');
    };

    return (
        <button onClick={() => { handleClick() }} className="tracking-wider w-full justify-center bg-skin-bgSoft rounded-md p-4 font-bold text-2xl text-skin-textSoft">
            Create Post
        </button>
    )
}

export default Create_button
