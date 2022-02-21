// import {useEffect} from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setCryptocurrencies,
//   setSearchTerm,
// } from "../../helpers/cryptoSlice";

// const SearchBar = () => {

// 	//
// 	const cryptocurrencies = useSelector(
//     (state) => state.crypto.cryptocurrencies
//   );const searchTerm = useSelector((state) => state.crypto.searchTerm);
//   //
// 	const dispatch = useDispatch();

//   return (
//     <div className="pt-0 pb-5 md:pt-10 md:pb-5 mx-4">
//       <form action="/search" method="GET">
//         <div className="bg-white dark:bg-gray-700 text-black dark:text-white flex items-center rounded-lg shadow-md md:shadow-xl">
//           <input
//             placeholder="Search"
//             type="search"
//             name="q"
//             className="rounded-l-full w-[50%] py-4 px-6 leading-tight focus:outline-none"
//             id="search"
// 			onChange={(e) => {
// 				dispatch(setSearchTerm(e.target.value));
// 			}}
//           />
//           <div className="p-2 md:p-4">
//             <button className="rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center"></button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
