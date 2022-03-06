import Script from "next/script";

// styles
import "antd/dist/antd.css"; // antsedign styles
import "../styles/globals.css"; //

// import "tailwindcss/tailwind.css"; // tailwind jit

import store from '../redux/store.js' //redux store
import {Provider} from 'react-redux'; //redux

import { Header, Navbar, MetaTags } from '../components' //Navbar


function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaTags />
      <Provider store={store}>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased w-screen dark:bg-gray-700 text-black dark:text-white">
          <Header />
          <Navbar />
          <div className="max-w-full h-full fixed right-0 top-14 overflow-y-auto left-0 md:left-0 lg:left-64 w-screen lg:w-[calc(100vw - 256px)] mt-4 mb-4 pb-4 px-4">
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
