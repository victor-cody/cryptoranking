import "../styles/globals.css"; //
import "antd/dist/antd.css"; // antsedign styles
import "tailwindcss/tailwind.css"; // tailwind jit



import store from '../app/store.js' //redux store
import {Provider} from 'react-redux'; //redux

import { Navbar } from '../components' //Navbar


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased w-screen bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <div className="h-full pages-container ml-14 mt-[28rem] mb-1 md:ml-64  px-4">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
