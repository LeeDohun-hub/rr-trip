import {Outlet} from 'react-router';

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <Footer />
            </main>
        </>
    );
}