"use server"
import { signIn, auth, signOut } from '@/lib/auth'
import dbConnect from './utils'
import { User } from './models'

export const handleLogin = async (formData) => {

    await signIn('github')
    // dbConnect();
    // const { email, password } = Object.fromEntries(formData);
    // try {
    //     const user = await User.findOne({ email: email });
    //     console.log(user);
    //     if (user) {
    //         if (user?.password === password) {
    //             console.log("yes", 1);
    //             await signIn('github')
    //         }
    //     }
    // }
    // catch (err) { console.log(err) }


}
export const handleLogout = async () => {
    await signOut();

}

export const handleRegister = async (formData) => {
    dbConnect();
}

export const sessionData = async () => {
    const session = await auth();
    return session;
}

