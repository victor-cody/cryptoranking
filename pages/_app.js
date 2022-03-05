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
      <MetaTags />
      <Provider store={store}>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased w-screen dark:bg-gray-700 text-black dark:text-white overflow-x-hidden">
          <Navbar />
          <div className="max-w-full h-full fixed right-0 top-0 overflow-y-auto overflow-x-hidden  left-14 md:left-16 lg:left-64 w-[calc(100vw - 3.5rem)] md:w-[calc(100vw - 4rem)] lg:w-[calc(100vw - 256px)] mt-4 mb-2 pb-4 px-4">
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
