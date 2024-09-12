import { useSession, getSession } from 'next-auth/react';

export const useSessionData = () => {
    // const { data: session } = useSession();
    // console.log(session);
    // return session;
};

export const getSessionData = async (context) => {
    const session = await getSession(context);
    return session;
};