import "antd/dist/antd.css"; // antsedign styles
import "tailwindcss/tailwind.css"; // tailwind jit

import store from '../app/store.js' //redux store
import {Provider} from 'react-redux'; //redux

import { Navbar } from '../components' //Navbar

import "../styles/globals.css"; //

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex-col flex-auto flex-shrink-0 antialiased w-screen flex overflow-hidden">
      <Navbar />
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64 px-4">
      <Component {...pageProps} />
      </div>
    </div>
    </Provider>
  );
}

export default MyApp;
