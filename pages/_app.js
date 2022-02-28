import Script from "next/script";

// styles
import "antd/dist/antd.css"; // antsedign styles
import "../styles/globals.css"; //

// import "tailwindcss/tailwind.css"; // tailwind jit

import store from '../redux/store.js' //redux store
import {Provider} from 'react-redux'; //redux

import { Navbar, MetaTags } from '../components' //Navbar


function MyApp({ Component, pageProps }) {
  return (
    <>
    <MetaTags/>
    <Provider store={store}>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased w-screen dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <div className="pages-container max-w-full h-full fixed right-0 top-0 overflow-y-auto ml-14 md:ml-64 mt-4 mb-2 pb-4  px-4">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
    </>
  );
}

export default MyApp;
