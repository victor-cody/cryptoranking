import Script from "next/script";

import "../styles/globals.css"; //
import "antd/dist/antd.css"; // antsedign styles
import "tailwindcss/tailwind.css"; // tailwind jit



import store from '../redux/store.js' //redux store
import {Provider} from 'react-redux'; //redux

import { Navbar, MetaTags } from '../components' //Navbar


function MyApp({ Component, pageProps }) {
  return (
    <>
    <MetaTags/>
      {/* Buy Me A Coffee */}
      <Script
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
      ></Script>
    <Provider store={store}>
      <div className="flex flex-row flex-auto antialiased w-screen h-full dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <div className="pages-container max-w-full lg:min-w-[80%] h-full fixed right-0 top-0 overflow-y-auto ml-14 mt-2 pb-4 md:ml-64 px-4">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
    </>
  );
}

export default MyApp;
