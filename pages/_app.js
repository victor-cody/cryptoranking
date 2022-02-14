import "antd/dist/antd.css"; // antsedign styles
import "tailwindcss/tailwind.css"; // tailwind jit

import { Navbar } from '../components' //Navbar

import "../styles/globals.css"; //

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex-col flex-auto flex-shrink-0 antialiased w-screen flex overflow-hidden">
      <Navbar />
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64 px-4">
      <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
