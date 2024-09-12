'use client';
import { savePost } from '@/app/api/create/route';
// import { auth } from '@/lib/auth';
import { sessionData } from '@/lib/authFun';
import { getPost, getPosts } from '@/lib/data';
import { Post } from '@/lib/models';
import dbConnect from '@/lib/utils';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

const Create = () => {
    const [session, setSession] = useState();
    const [slug, setSlug] = useState('0');
    const [img, setImg] = useState();
    const [form, setForm] = useState({ title: '', desc: '', img: '' });

    useEffect(() => {
        async function temp() {
            const tempo = await sessionData();
            setSession(tempo);
            fetch('http://localhost:3000/api/post/count')
                .then((response) => response.json())
                .then((res) => { setSlug(tempo.user.name + res) })
                .catch((err) => { console.log(err) });

        }
        temp();
    }, [])

    const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }) };

    const handleSubmit = async (e) => {
        const data = { ...form, slug: slug, userId: session.user.name }

        fetch('http://localhost:3000/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(res => console.log(res))
            .catch(error => console.error('Error:', error));

    };

    return (
        session &&
        <div className="w-full space-y-4 bg-skin-bgSoft p-4  ">
            {['title', 'desc', 'img'].map((field) => (
                <div key={field}>
                    <label className="block text-sm font-medium">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'desc' ? (
                        <textarea
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            required={['title', 'userId', 'slug'].includes(field)}
                            className="pl-10 bg-skin-bgSoft mt-1 block h-40 border border-gray-300 rounded-md w-[50%] items-center"
                        />
                    ) : (
                        <input
                            type="text"
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            required={['title', 'userId', 'slug'].includes(field)}
                            className="pl-10 bg-skin-bgSoft mt-1 block h-10 border border-gray-300 rounded-md w-[50%] items-center"
                        />
                    )}
                </div>
            ))}
            <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
    );
};

export default Create;