import "../styles/globals.css"; //
import "antd/dist/antd.css"; // antsedign styles
import "tailwindcss/tailwind.css"; // tailwind jit



import store from '../redux/store.js' //redux store
import {Provider} from 'react-redux'; //redux

import { Navbar } from '../components' //Navbar


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="flex flex-row flex-auto antialiased w-screen bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <div className="pages-container min-w-[80%] h-full fixed right-0 top-0 overflow-y-auto ml-14 mb-1 md:ml-64 px-4">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
