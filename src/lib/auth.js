import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { getUser } from "./data"
import dbConnect from "./utils"
import { User } from "./models"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            clientId: process.env.AUTH_GITHUB_ID
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
        },

    },

})

