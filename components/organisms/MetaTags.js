// head
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta name="theme-color" content="#d73e87" /> */}

      <title>Crypto Ranking </title>
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="crypto, cryptocurrency, cryptocurrencies, crypto news, victor, victor ikechukwu "
      />
      <link rel="canonical" href="cryptoranking-1.netlify.app/" />
      <link rel="apple-touch-icon" href="/images/logo.jpg" />
      <link rel="icon" href="/images/logo.jpg" />

      {/* Primary Meta Tags */}
      <meta name="title" content="cryptobase" />
      <meta
        name="description"
        content="cryptranking is the online hub for all things crypto, with in-depth data about all cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more all ina single web application"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cryptoranking-1.netlify.app/" />
      <meta property="og:title" content="cryptoranking" />

      <meta
        property="og:description"
        content="cryptranking is the online hub for all things crypto, with in-depth data about all cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more all ina single web application"
      />
      <meta
        property="og:image"
        content="https://cryptoranking-1.netlify.app/images/site-banner.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="cryptoranking-1.netlify.app/" />
      <meta property="twitter:title" content="cryptoranking" />
      <meta property="twitter:creator" content="Victor_codejs" />
      <meta
        property="twitter:description"
        content="cryptranking is the online hub for all things crypto, with in-depth data about all cryptocurrencies, crypto markets, exchanges, popular cryptocurrency news and much more all ina single web application"
      />
      {/* <meta
        property="twitter:image"
        content="https://cryptoranking-1.netlify.app/images/site-banner.png"
      /> */}
      {/* Buy Me A Coffee */}
      {/* <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="molipa"
        data-description="Support me on Buy me a coffee!"
        data-message="
         If you're enjoying cryptobase - the online hub for all things crypto, consider supporting me with a coffee ☕️"
        data-color="#FFDD00"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script> */}
    </Head>
  );
};

export default MetaTags;
