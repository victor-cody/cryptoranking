// head
import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <>
      <Head>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content="#d73e87" /> */}

        <title>cryprobase {title ? `- ${title} ` : ""}</title>
        <meta name="description" content="" />
        <meta name="keywords" content="crypto, cryptocurrency, cryptocurrencies, crypto news, victor, victor ikechukwu " />
        <link rel="canonical" href="codewithvictor.netlify.app/" />
        <link rel="apple-touch-icon" href="/icons/logo192.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Primary Meta Tags */}
        <meta name="title" content="cryptobase" />
        <meta
          name="description"
          content="cryptobase is the online hub for all things crypto, with in-depth data about all cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more all ina single web application"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="codewithvictor.netlify.app/" />
        <meta property="og:title" content="cryptobase" />
        <meta
          property="og:description"
          content="cryptobase is the online hub for all things crypto, with in-depth data about all cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more all ina single web application"
        />
        <meta
          property="og:image"
          content="https://codewithvictor.netlify.app/assets/site-banner.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="codewithvictor.netlify.app/" />
        <meta property="twitter:title" content="Victor Ikechukwu" />
        <meta property="twitter:description" content="cryptobase is the online hub for all things crypto, with in-depth data about all cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more all ina single web application" />
        <meta
          property="twitter:image"
          content="https://codewithvictor.netlify.app/assets/site-banner.png"
        />
      </Head>
      
    </>
  );
};

export default MetaTags;
