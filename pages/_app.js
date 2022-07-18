import { useEffect } from "react";
// styles
import "antd/dist/antd.css"; // antsedign styles
import "../styles/globals.css"; //

// import "tailwindcss/tailwind.css"; // tailwind jit

//aos
import AOS from "aos";
import "aos/dist/aos.css";

import store from "../redux/store.js"; //redux store

//redux state management
import { Provider /*useSelector, useDispatch*/ } from "react-redux";

//components
import { Cursor, Header, Navbar, Footer, MetaTags } from "../components";

// import { toggleDarkMode, getTheme } from "../redux/navBarState";

function MyApp({ Component, pageProps }) {
  // const dispatch = useDispatch();
  useEffect(() => {
    // initialize AOS
    AOS.init();

    // //getting device theme on page load
    // dispatch(getTheme)
  });

  return (
    <>
      <MetaTags />
      <Provider store={store}>
        <Cursor />
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased w-screen dark:bg-gray-700 text-black dark:text-white">
          <Header />
          <Navbar />
          <div className="max-w-full h-full fixed right-0 top-14 overflow-y-auto sm:left-0 md:left-0 lg:!left-60 mt-4 mb-8 pb-8 px-4">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
