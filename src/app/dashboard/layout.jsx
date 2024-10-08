import Head from "next/head";
import Link from "next/link";
import Script from "next/script";


export const metadata = {
    title: "dashboard",
    description: "Generated by create next app",
};

export default function dashboardLayout({ children }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>
            <div className="nav">
                <div className="menu">
                    <Link href={'/'}>
                    <button id="reservas-btn">Home</button>
                    </Link>
                    <Link href={'/dashboard/reservas'}>
                    <button id="reservas-btn">Reservas</button>
                    </Link>
                    <Link href={'/dashboard/customers'}>
                    <button id="clientes-btn">Clientes</button>
                    </Link>
                </div>
                <div className="profile">
                    <i className="fas fa-bell" id="campana-btn"></i>
                    <i className="fas fa-user"></i>
                    <span>user</span>
                </div>
            </div>
            <div>{children}</div>
        </>
    );
}
