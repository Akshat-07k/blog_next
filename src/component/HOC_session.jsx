// components/withSession.js
import { SessionProvider } from 'next-auth/react';

const withSession = (Component) => {
    return function WrappedComponent({ session, ...pageProps }) {
        return (
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        );
    };
};

export default withSession;