import Head from "next/head";

import { SeoInterface } from "@/interfaces/SeoInterface";

const Seo = ({ title, description }: SeoInterface) => {

    return (
        <Head>
            <meta name="author" content="Vagner Mengali" />
            <meta name="keywords" content="Javascript" />
            <link rel="fluid-icon" href="icon/favicon.svg" title="Vagner Mengali" />
            <link rel="icon" type="image/svg+xml" href="icon/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title === "Homepage" ? "Vagner Mengali • Portfólio" : `${title} • Vagner Mengali • Portfólio`}</title>
            <link rel="shortcut icon" href="icon/favicon.svg" type="image/x-icon" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Vagner Mengali" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://vagnermengali.com/" />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/banner.webp" />
            <meta name="twitter:title" content="Vagner Mengali" />
            <meta name="twitter:site" content="@vagnermengali" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="/banner.webp" />
            <meta name="twitter:description" content={description} />
            <meta property="al:ios:app_name" content="Vagner Mengali" />
            <meta property="al:ios:url" content="https://vagnermengali.com/" />
            <meta property="al:android:app_name" content="Vagner Mengali" />
            <meta property="al:android:url" content="https://vagnermengali.com/" />
            <link rel="canonical" href="https://vagnermengali.com/" />
        </Head>
    );
};

export default Seo;