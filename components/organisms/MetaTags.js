// head
import Head from "next/head";
import Script from "next/script";

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

        <title>Cryproverse {title ? `- ${title} ` : ""}</title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
        <link rel="canonical" href="codewithvictor.netlify.app/" />
        <link rel="apple-touch-icon" href="/icons/logo192.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Cryptoverse" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="codewithvictor.netlify.app/" />
        <meta property="og:title" content="Cryptoverse" />
        <meta
          property="og:description"
          content=""
        />
        <meta
          property="og:image"
          content="https://codewithvictor.netlify.app/assets/site-banner.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="codewithvictor.netlify.app/" />
        <meta property="twitter:title" content="Victor Ikechukwu" />
        <meta
          property="twitter:description"
          content=""
        />
        <meta
          property="twitter:image"
          content="https://codewithvictor.netlify.app/assets/site-banner.png"
        />
      </Head>
      {/* Buy Me A Coffee */}
      <Script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="molipa"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        // If you're enjoying my portfolio, consider supporting me with a coffee ☕️
        data-color="#FFDD00"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></Script>
    </>
  );
};

export default MetaTags;
