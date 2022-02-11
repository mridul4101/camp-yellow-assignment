import Head from 'next/head'
import Script from 'next/script';

import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

import classes from "../styles/index.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Camp Yellow</title>
                <meta name='description' content='This app is created on Next JS as part of an assignment for Camp Yellow' />

                {/* Bootstrap */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                ></link>
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                    crossOrigin="anonymous"
                ></Script>

                {/* Fontawesome */}
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossOrigin="anonymous"
                ></link>
                <Script
                    src="https://kit.fontawesome.com/a30bb40356.js"
                    crossOrigin="anonymous"
                ></Script>

                {/* jquery */}
                <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
            </Head>

            <div>
                <Navbar />
                <div className={`${classes.container} d-flex justify-content-center`}>
                    <LeftSidebar />
                    <Feed />
                    <RightSidebar />
                </div>
            </div>

        </div>
    )
}
